import { v4 as uuid } from 'uuid';

class User {
  id: string;

  github: string;

  constructor({ github }: Omit<User, 'id'>) {
    this.id = uuid();
    this.github = github;
  }
}

export default User;
