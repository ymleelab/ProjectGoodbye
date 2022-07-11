import { model } from 'mongoose';
import { InterfaceReceiver, ReceiverSchema } from '../schemas/receiver-schema';

const Receiver = model<InterfaceReceiver>('receivers', ReceiverSchema);

export class RecieverModel {
    async findById(receiverId: string) {
        const receiver = await Receiver.findOne({ _id: receiverId });
        return receiver;
    }

    async create(receiverInfo: InterfaceReceiver) {
        const createdNewReceiver = await Receiver.create(receiverInfo);
        return createdNewReceiver;
    }

    async deleteById(receiverId: string) {
        const deletedReceiver = await Receiver.findOneAndDelete({
            _id: receiverId,
        });
        return deletedReceiver;
    }

    async updateById(receiverId: string, update: InterfaceReceiver) {
        const filter = { _id: receiverId };
        const option = { returnOriginal: false };
        const updatedReceiver = await Receiver.findOneAndUpdate(
            filter,
            update,
            option,
        );
        return updatedReceiver;
    }

    async findReceiversByUserId(userId: string) {
        const receivers = await Receiver.find({ userId });
        return receivers;
    }
}

const receiverModel = new RecieverModel();

export { receiverModel };
