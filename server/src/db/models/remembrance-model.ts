import { Model, model, UpdateQuery } from 'mongoose';
import { RemembranceSchema, IRemembrance } from '../schemas/remembrance-schema';

export interface IUpdateRemembrance {
    fullName?: string;
    dateOfBirth?: string;
    dateOfDeath?: string;
    isPublic?: boolean;
    photo?: string;
}

export class RemembranceModel {
    Remembrance: Model<IRemembrance>;

    constructor() {
        this.Remembrance = model<IRemembrance>(
            'remembrances',
            RemembranceSchema,
        );
    }

    // 새 추모 데이터 생성
    async create(remembranceInfo: IRemembrance) {
        const createdNewRemembrance = await this.Remembrance.create(
            remembranceInfo,
        );

        return createdNewRemembrance;
    }

    // 전체 사망한 유저의 추모 데이터를 업데이트순으로 조회
    async find() {
        const remembrances = await this.Remembrance.find({
            dateOfDeath: { $exists: true },
        }).sort({
            updatedAt: -1,
        });

        return remembrances;
    }

    // 최근 업데이트 추모 조회
    async findRecent(count: number) {
        const recentRemembrances = await this.Remembrance.find()
            .sort({ updatedAt: -1 })
            .limit(count);

        return recentRemembrances;
    }

    // objectId를 이용해 특정 추모 조회
    async findById(remembranceId: string) {
        const remembrance = await this.Remembrance.findOne({
            _id: remembranceId,
        });

        return remembrance;
    }

    // userId를 이용해 특정 추모 조회
    async findByUserId(userId: string) {
        const remembrance = await this.Remembrance.findOne({ userId });

        return remembrance;
    }

    // 추모의 유저 데이터 수정
    async update(userId: string, update: IUpdateRemembrance) {
        const filter = { userId };
        const option = { returnOriginal: false };

        const updatedRemembrance = await this.Remembrance.findOneAndUpdate(
            filter,
            update,
            option,
        );

        return updatedRemembrance;
    }

    // 추모글 추가 및 삭제
    async updateComment(
        remembranceId: string,
        query: UpdateQuery<IRemembrance>,
    ) {
        const filter = { _id: remembranceId };

        await this.Remembrance.findByIdAndUpdate(filter, query);
    }
}

const remembranceModel = new RemembranceModel();

export { remembranceModel };
