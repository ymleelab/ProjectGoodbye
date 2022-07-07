import { Router } from 'express';
import { userService } from '../services/user-service';
const usersRouter = Router();

/* GET users listing. */
usersRouter.post('/register', async (req, res, next) => {
    try {
        //is 를 사용해서 body를 확인해 줄까?
        const { fullName, email, password, dateOfBirth } = req.body;
        console.log(fullName);
        const newUser = await userService.addUser({
            fullName,
            email,
            password,
            dateOfBirth,
        });
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
});

usersRouter.get('/hi', function (req, res, next) {
    res.send('hello');
});
export { usersRouter };
