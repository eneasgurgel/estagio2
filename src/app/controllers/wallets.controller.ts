import { Request, Response } from "express"

class WalletsController{

   helloworld(req: Request, res: Response) {

    return res.status(200).json({message: 'ola mundo'})
   }
}

export default new WalletsController()