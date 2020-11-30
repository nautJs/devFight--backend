import { isThisHour } from 'date-fns';
import User from '../models/User';

interface CreateUserDTO{
  github: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public create({ github }: CreateUserDTO): User {
    const user = new User({ github });

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
