import { response } from 'express';
import mongoose from 'mongoose';

class Repository {
    private readonly schema: mongoose.Model<mongoose.Document>;

    constructor(schema: mongoose.Model<mongoose.Document>) {
        this.schema = schema;
    }

    public async create(payload: Object) {
        return this.schema.create(payload);
    }

    public async findAll() {
        return this.schema.find();
    }

    public async findOne(id: string) {
        return this.schema.findById(id);
    }

    public async update(id: string, payload: Object) {
        return this.schema.findByIdAndUpdate(id, payload);
    }

    public async remove(id: string) {
        return this.schema.findByIdAndDelete(id);
    }
}

export default Repository;
