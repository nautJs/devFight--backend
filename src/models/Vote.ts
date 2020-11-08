import { isThisMinute } from 'date-fns';
import { v4 as uuid } from 'uuid';

class Vote {
  id: string;

  name: string;

  date: Date;

  constructor({ name, date }: Omit<Vote, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.date = date;
  }
}

export default Vote;
