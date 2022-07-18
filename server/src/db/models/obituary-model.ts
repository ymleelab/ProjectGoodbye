import { Model, model } from 'mongoose';
import { IFamily, IObituary, ObituarySchema } from '../schemas/obituary-schema';

export interface IUpdateObituary {
    deceased?: string;
    dateOfBirth?: string;
    dateOfDeath?: string;
    age?: number;
    family?: Array<IFamily>;
    funeral?: string;
    dateOfCremate?: string;
}

export class ObituaryModel {
    Obituary: Model<IObituary>;

    constructor() {
        this.Obituary = model<IObituary>('obituaries', ObituarySchema);
    }

    // 새 부고 생성
    async create(obituaryInfo: IObituary): Promise<IObituary> {
        const createdNewObituary = await this.Obituary.create(obituaryInfo);

        return createdNewObituary;
    }

    // objectId를 이용해 특정 부고 조회
    async findById(obituaryId: string): Promise<IObituary> {
        const obituary = await this.Obituary.findOne({
            _id: obituaryId,
        });

        return obituary as IObituary;
    }

    // 부고 수정
    async update(
        obituaryId: string,
        update: IUpdateObituary,
    ): Promise<IObituary> {
        const filter = { _id: obituaryId };
        const option = { returnOriginal: false };

        const updatedObituary = await this.Obituary.findOneAndUpdate(
            filter,
            update,
            option,
        );

        return updatedObituary as IObituary;
    }

    // 부고 삭제
    async delete(obituaryId: string): Promise<IObituary> {
        const filter = { _id: obituaryId };

        const deletedObituary = await this.Obituary.findOneAndDelete(filter);

        return deletedObituary as IObituary;
    }
}

const obituaryModel = new ObituaryModel();

export { obituaryModel };
