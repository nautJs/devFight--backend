import Vote from '../models/Vote';

class WishesRepository {
  private wishes: Vote[];

  constructor() {
    this.wishes = [];
  }

  public all(): Vote[] {
    return this.wishes;
  }
}

export default WishesRepository;
