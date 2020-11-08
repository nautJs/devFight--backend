import { Router } from 'express';

import WishesRepository from '../repositories/WishesRepository';

const wishesRouter = Router();
const wishesRepository = new WishesRepository();

wishesRouter.get('/', (request, response) => {
  const wishes = wishesRepository.all();

  return response.json(wishes);
});

export default wishesRouter;
