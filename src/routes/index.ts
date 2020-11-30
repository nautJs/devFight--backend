import { Router } from 'express';

import wishesRouter from './wishes.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/wishes', wishesRouter);
routes.use('/users', usersRouter);

export default routes;
