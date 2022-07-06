import { remembranceModel } from '../db';
import { userService } from './index';

class RemembranceService {
    constructor(remembranceModel) {
        this.remembranceModel = remembranceModel;
    }

    // 새 추모 생성
    async addRemembrance(userId, remembranceInfo) {
        const user = await userService.getUser(userId);
        remembranceInfo = {
            fullName: user.fullName,
            dateOfBirth: user.dateOfBirth,
            photo: user.photo,
            ...remembranceInfo,
        };

        const createdNewRemembrance = await this.remembranceModel.create(
            remembranceInfo,
        );

        return createdNewRemembrance;
    }

    // 최근 업데이트 추모 조회
    async getRecentRemembrances(count) {
        const remembrances = await this.remembranceModel.findRecent(count);

        return remembrances;
    }

    // 특정 추모 조회
    async getRemembranceById(remembranceId) {
        const remembrance = await this.remembranceModel.findById(remembranceId);
        if (!remembrance) {
            throw new Error(
                '해당 추모는 존재하지 않습니다. 다시 확인해 주세요.',
            );
        }

        return remembrance;
    }

    // 특정 추모글 조회
    async getCommentById(remembranceId, commentId) {
        const comment = await this.remembranceModel.findCommentById(
            remembranceId,
            commentId,
        );
        if (!comment) {
            throw new Error(
                '해당 추모 글은 존재하지 않습니다. 다시 확인해 주세요.',
            );
        }

        return comment;
    }

    // 추모글 추가
    async addComment(remembranceId, commentInfo) {
        const comment = await this.remembranceModel.createComment(
            remembranceId,
            commentInfo,
        );

        return comment;
    }

    // 추모글 수정
    async updateCommet(remembranceId, commentId, update) {
        const updatedRemembrance = await this.remembranceModel.updateComment(
            remembranceId,
            commentId,
            update,
        );

        return updatedRemembrance;
    }

    // 추모글 삭제
    async deleteComment(remembranceId, commentId) {
        const deletedRemembrance = await this.remembranceModel.delete(
            remembranceId,
            commentId,
        );

        return deletedRemembrance;
    }
}

const remembranceService = new RemembranceService(remembranceModel);

export { remembranceService };
