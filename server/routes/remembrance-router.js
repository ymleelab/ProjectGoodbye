import { Router } from 'express';
import { remembranceService } from '../services';

const remembranceRouter = Router();

// 추모 데이터 생성
remembranceRouter.post('/', async (req, res, next) => {
    try {
        // userId는 뭐로 전달..? isPublic은 추모 생성할 때 입력받는지, user 데이터에서 가져오는지?
        const { dateOfDeath, isPublic } = req.body;

        const newRemembrance = await remembranceService.addRemembrance(userId, {
            dateOfDeath,
            isPublic,
        });

        res.status(201).json(newRemembrance);
    } catch (error) {
        next(error);
    }
});

// 최근 업데이트된 추모 조회
remembranceRouter.get('/', async (req, res, next) => {
    try {
        // 몇개 가져올지.. 일단은 query로 받는거로 구현
        const { count } = req.query;

        const recentRemembrances =
            await remembranceService.getRecentRemembrances(count);

        res.status(200).json(recentRemembrances);
    } catch (error) {
        next(error);
    }
});

// 특정 추모 조회
remembranceRouter.get('/:remembranceId', async (req, res, next) => {
    try {
        const { remembranceId } = req.params;

        const remembrance = await remembranceService.getRemembranceById(
            remembranceId,
        );

        res.status(200).json(remembrance);
    } catch (error) {
        next(error);
    }
});

// 특정 추모 글 조회
remembranceRouter.get(
    '/:remembranceId/comments/:commentId',
    async (req, res, next) => {
        try {
            const { remembranceId, commentId } = req.params;

            const comment = await remembranceService.getCommentById(
                remembranceId,
                commentId,
            );

            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    },
);

// 추모 글 추가
remembranceRouter.post('/:remembranceId/comments', async (req, res, next) => {
    try {
        const { remembranceId } = req.params;
        const { writer, title, content, password } = req.body;

        const newComment = await remembranceService.addComment(remembranceId, {
            writer,
            title,
            content,
            password,
        });

        res.status(201).json(newComment);
    } catch (error) {
        next(error);
    }
});

// 추모 글 수정
remembranceRouter.patch(
    '/:remembranceId/comments/:commentId',
    async (req, res, next) => {
        try {
            const { remembranceId, commentId } = req.params;
            const { writer, title, content, password } = req.body;

            const comment = await remembranceService.updateCommet(
                remembranceId,
                commentId,
                password,
                {
                    writer,
                    title,
                    content,
                },
            );

            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    },
);

// 추모 글 삭제
remembranceRouter.delete(
    '/:remembranceId/comments/:commentId',
    async (req, res, next) => {
        try {
            const { remembranceId, commentId } = req.params;
            const { password } = req.body;

            const remembrance = await remembranceService.deleteComment(
                remembranceId,
                commentId,
                password,
            );
            if (remembrance) {
                res.status(201).json({ result: 'success' });
            }
        } catch (error) {
            next(error);
        }
    },
);

export { remembranceRouter };
