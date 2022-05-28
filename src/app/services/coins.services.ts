import BadRequest from '../error/BadRequest';
import NotFound from '../error/NotFound';
import ICoinData from '../interfaces/coinDataInterface';
import coinsRepository from '../repository/coins.repository';
import transactionsRepository from '../repository/transactions.repository';
import walletsRepository from '../repository/wallets.repository';

class CoinsService {
    async createNewCoin(data: ICoinData, address: string) {
        const newWallet = await coinsRepository.create({
            coin: data.codein,
            coinName: data.name.split('/')[1] ? data.name.split('/')[1] : data.name,
            amount: 0,
            address
        });
        if (!newWallet) throw new Error();
        return newWallet;
    }

    async findCoinsAddress(address: string) {
        const allCoins = await coinsRepository.findAddressCoins(address);
        if (allCoins.length === 0) throw new NotFound('Nao foram encontradas moedas nesse endereço');
        return allCoins;
    }

    async convertCoinAmount(data: any, tdata: ICoinData, body: any) {
        let value = 0;

        if (body.type === 'deposit') {
            if (body.amount <= 0) {
                throw new BadRequest('Nao se pode depositar valores negativos');
            }
            value = data.amount + body.amount * Number(tdata.bid);

            value = Number(Number.parseFloat(value.toString()).toFixed(2));

            await transactionsRepository.create({
                coinName: data.coinName,
                amount: (body.amount * Number(tdata.bid)).toFixed(2),
                type: 'Deposito',
                coinId: data.id,
                address: data.address
            });
        }

        if (body.type === 'withdraw') {
            if (body.amount <= 0) {
                throw new BadRequest('Nao se pode sacar valores negativos');
            }

            value = data.amount - body.amount * Number(tdata.bid);

            if (body.amount > value) {
                throw new BadRequest('Nao se pode sacar um valor maior que o saldo!');
            }

            await transactionsRepository.create({
                coinName: data.coinName,
                amount: -(body.amount.toFixed(2) * Number(tdata.bid)).toFixed(2),
                type: 'Saque',
                coinId: data.id,
                address: data.address
            });

            value = Number(Number.parseFloat(value.toString()).toFixed(2));
        }

        if (body.type === 'transfer') {
            const receiverAddress = await walletsRepository.findOne(body.receiverAddress);
            if (!receiverAddress) {
                throw new NotFound('Endereço recebedor não encontrado');
            }

            if (body.amount <= 0) {
                throw new BadRequest('Nao se pode transferir valores negativos');
            }

            let findCoin = await coinsRepository.findUniqueCoin(body.coin, receiverAddress.id);
            if (!findCoin) {
                findCoin = await this.createNewCoin(tdata, receiverAddress.id);
            }

            value = body.amount * Number(tdata.bid);
            if (body.amount > value) {
                throw new BadRequest('Nao se pode transferir um valor maior que o saldo!');
            }

            value = Number(Number.parseFloat(value.toString()).toFixed(2));

            await transactionsRepository.create({
                coinName: data.coinName,
                amount: -(body.amount.toFixed(2) * Number(tdata.bid)).toFixed(2),
                type: 'Transferencia Enviada',
                coinId: data.id,
                address: data.address,
                receiverAddress: findCoin.address
            });

            await transactionsRepository.create({
                coinName: data.coinName,
                amount: (body.amount.toFixed(2) * Number(tdata.bid)).toFixed(2),
                type: 'Transferencia Recebida',
                coinId: findCoin.id,
                address: findCoin.address,
                transmiterAddress: data.address
            });

            await coinsRepository.updateFunds(findCoin.id, findCoin.amount + value);
            return coinsRepository.updateFunds(data.id, data.amount - value);
        }
        return coinsRepository.updateFunds(data.id, value);
    }

    async getData(data: any): Promise<ICoinData> {
        const a: ICoinData = {
            // eslint-disable-next-line no-nested-ternary
            name: data.coin === 'EUR' ? 'Euro' : data.coin === 'BRL' ? 'Real Brasileiro' : 'Dolar Americano',
            code: data.coin,
            codein: data.convertFrom,
            bid: '1.00',
            high: '1',
            low: '1',
            pctChange: '0',
            varBid: 'a',
            ask: 'a',
            timestamp: '28/05/2022',
            create_date: '25/05/2022'
        };
        if (data.coin === data.convertFrom) {
            return a;
        }
        const getData = await coinsRepository
            .findCoinData(data.coin, data.convertFrom)
            .then((response) => response.data[data.convertFrom + data.coin])
            .catch(() => {
                throw new NotFound('Transação invalida ou não suportada');
            });

        return getData;
    }

    async getTransactionsCoin(id: string) {
        const transactions = await transactionsRepository.findByCoin(id);
        if (transactions.length === 0) {
            throw new NotFound('transações nao encontradas para esta moeda');
        }

        return transactions;
    }
}

export default new CoinsService();
