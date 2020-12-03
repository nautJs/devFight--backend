import User from '../models/User';
import { EntityRepository, Repository } from 'typeorm';

interface CreateUserDTO{
  github: string;
}

@EntityRepository(User)
class UsersRepository extends Repository<User>{
 
}

export default UsersRepository;
