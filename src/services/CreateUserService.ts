import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';


interface Request {
  github: string;
}

class CreateUserService {
  public async execute({ github }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = usersRepository.create({
      github,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
