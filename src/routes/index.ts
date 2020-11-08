import { Router } from 'express';

import wishesRouter from './wishes.routes';

const routes = Router();

routes.use('/wishes', wishesRouter);

export default routes;
