import Amigos2 from '../models/amigos2.js';
import User from '../models/user.js';
import '../models/index.js';

const amigos2Relations = [
  {
    model: User, as: 'user'
  }
];

const showLogs =
  process.env.SHOW_DB_ERRORS === 'true' ||
  process.env.NODE_ENV === 'development';

class Amigos2Repository {
  async findAll() {
    try {
      return await Amigos2.findAll({
        include: amigos2Relations
      });
    } catch (error) {
      if (showLogs) console.error('🔥 [Amigos2Repo.findAll] Error:', error);
      throw error;
    }
  }

  async findAllPaginated(options = {}) {
    try {
      const { where = {}, offset = 0, limit = 10, order = [['id', 'DESC']] } = options;
      return await Amigos2.findAll({
        where,
        offset,
        limit,
        order,
        include: amigos2Relations
      });
    } catch (error) {
      if (showLogs) console.error('🔥 [Amigos2Repo.findAllPaginated] Error:', error);
      throw error;
    }
  }

  async count(where = {}) {
    try {
      return await Amigos2.count({ where });
    } catch (error) {
      if (showLogs) console.error('🔥 [Amigos2Repo.count] Error:', error);
      throw error;
    }
  }

  async findById(id) {
    try {
      return await Amigos2.findByPk(id, {
        include: amigos2Relations
      });
    } catch (error) {
      if (showLogs) {
        console.error(`🔥 [Amigos2Repo.findById] Error (id: ${id}):`, error);
      }
      throw error;
    }
  }

  async create(data) {
    try {
      return await Amigos2.create(data);
    } catch (error) {
      if (showLogs) console.error('🔥 [Amigos2Repo.create] Error:', error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const amigo = await Amigos2.findByPk(id);
      if (!amigo) return null;
      return await amigo.update(data);
    } catch (error) {
      if (showLogs) {
        console.error(`🔥 [Amigos2Repo.update] Error (id: ${id}):`, error);
      }
      throw error;
    }
  }

  async delete(id) {
    try {
      const amigo = await Amigos2.findByPk(id);
      if (!amigo) return null;
      await amigo.destroy();
      return true;
    } catch (error) {
      if (showLogs) {
        console.error(`🔥 [Amigos2Repo.delete] Error (id: ${id}):`, error);
      }
      throw error;
    }
  }
}

export default new Amigos2Repository();
