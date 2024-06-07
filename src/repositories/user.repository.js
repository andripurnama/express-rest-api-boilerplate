import db from '../models/';
import BaseRepository from './base.repository';

class UserRepository extends BaseRepository{
  constructor()
  {
    super(db.User);
  }
}

export default UserRepository;