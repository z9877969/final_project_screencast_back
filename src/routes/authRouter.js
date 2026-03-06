import { Router } from 'express';

import { auth as ctrl } from '../controllers/index.js';

const authRouter = Router();

authRouter.post('/register', ctrl.registerUser);
authRouter.post('/login', ctrl.loginUser);


export default authRouter;
