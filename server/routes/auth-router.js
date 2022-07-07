import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { userService } from '../services/user-service';
const authRouter = Router();
authRouter.get('/', async (req, res, next) => {
    try {
        const userId = req.user._id;
        res.status(200).json({ userId });
    } catch (error) {
        next(error);
    }
});

authRouter.patch('/:userId', async (req, res, next) => {
    try {
        // is로 req.body 확인 필요?
        // params로부터 id를 가져옴
        const { userId } = req.params;
        const loggedInUserId = req.user._id;
        console.log(loggedInUserId);

        // body data 로부터 업데이트할 사용자 정보를 추출함.
        const { fullName, password, dateOfBirth, photo, currentPassword } =
            req.body;
        // currentPassword 없을 시, 진행 불가
        if (currentPassword === password) {
            throw new Error('새 비밀번호는 현재 비밀번호와 같을 수 없습니다.');
        }

        const userInfoRequired = { userId, currentPassword };

        // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
        // 보내주었다면, 업데이트용 객체에 삽입함.
        const toUpdate = {
            ...(fullName && { fullName }),
            ...(password && { password }),
            ...(dateOfBirth && { dateOfBirth }),
            ...(photo && { photo }),
        };

        // 사용자 정보를 업데이트함.
        const updatedUserInfo = await userService.setUser(
            userInfoRequired,
            toUpdate,
        );

        // 업데이트 이후의 유저 데이터를 프론트에 보내 줌
        res.status(200).json(updatedUserInfo);
    } catch (error) {
        next(error);
    }
});

// 회원 탈퇴 api
authRouter.delete('/:userId', async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { currentPassword } = req.body;
        if (!currentPassword) {
            throw new Error('정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
        }
        const userInfoRequired = { userId, currentPassword };
        const deletedUserInfo = await userService.deleteUser(userInfoRequired);
        // 만약에 정상적으로 delete가 되어서 delete한 유저 정보가 있다면,
        if (deletedUserInfo) {
            res.status(200).json({ result: 'success' });
        }
    } catch (error) {
        next(error);
    }
});

export { authRouter };
