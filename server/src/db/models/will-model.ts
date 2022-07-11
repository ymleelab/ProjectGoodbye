import { model } from 'mongoose';
import type { InterfaceWill } from '../schemas/will-schema';
import { WillSchema } from '../schemas/will-schema';

const Will = model<InterfaceWill>('wills', WillSchema);

export class WillModel {
    async findById(willId: string) {
        const will = await Will.findOne({ _id: willId });
        return will;
    }

    async create(willInfo: InterfaceWill) {
        const createdNewWill = await Will.create(willInfo);
        return createdNewWill;
    }

    async deleteById(willId: string) {
        const deletedWill = await Will.findOneAndDelete({ _id: willId });
        return deletedWill;
    }
// update부분의 interface가 다를지도? 그냥 여기만 any?

    async updateById(willId: string, update: InterfaceWill) {
        const filter = { _id: willId };
        const option = { returnOriginal: false };
        const updatedWill = await Will.findOneAndUpdate(filter, update, option);
        return updatedWill;
    }

    async findWillsByUserId(userId: string) {
        const wills = await Will.find({ userId });
        return wills;
    }
}

const willModel = new WillModel();

export { willModel };
