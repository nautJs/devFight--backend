import { Router } from 'express';
import {getCustomRepository} from 'typeorm';
import User from '../models/User';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository)
  const users = usersRepository.find();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const { github } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      github,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
