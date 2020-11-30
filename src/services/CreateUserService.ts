import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  github: string;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute({ github }: Request): User {
    const user = this.usersRepository.create({
      github,
    });

    return user;
  }
}

export default CreateUserService;
