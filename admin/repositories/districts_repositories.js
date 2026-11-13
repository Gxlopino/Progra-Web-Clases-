import District from '../models/district.js';

class DistrictRepository {
  async findAll(options = {}) {
    const { order = [['id', 'ASC']] } = options;
    return await District.findAll({ order });
  }
}

export default new DistrictRepository();
