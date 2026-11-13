import Semester from '../models/semester.js';

class SemesterRepository {
  async findAll(options = {}) {
    const { order = [['id', 'ASC']] } = options;
    return await Semester.findAll({ order });
  }
}

export default new SemesterRepository();
