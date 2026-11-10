// admin/repositories/users_repositories.js
import User from '../models/user.js';
import { Op } from 'sequelize';

const showLogs = process.env.SHOW_DB_ERRORS === 'true' || process.env.NODE_ENV === 'development';

class UserRepository {
  /**
   * Obtiene todos los registros
   */
  async findAll() {
    try {
      return await User.findAll();
    } catch (error) {
      if (showLogs) console.error('🔥 [UserRepo.findAll] Error:', error);
      throw error;
    }
  }

  /**
   * Obtiene registros con paginación
   */
  async findAllPaginated(options = {}) {
    try {
      const { where = {}, offset = 0, limit = 10, order = [['id', 'DESC']] } = options;
      return await User.findAll({
        where,
        offset,
        limit,
        order,
      });
    } catch (error) {
      if (showLogs) console.error('🔥 [UserRepo.findAllPaginated] Error:', error);
      throw error;
    }
  }

  /**
   * Cuenta registros con filtros
   */
  async count(where = {}) {
    try {
      return await User.count({ where });
    } catch (error) {
      if (showLogs) console.error('🔥 [UserRepo.count] Error:', error);
      throw error;
    }
  }

  /**
   * Busca usuario por ID
   */
  async findById(id) {
    try {
      return await User.findByPk(id);
    } catch (error) {
      if (showLogs) console.error(`🔥 [UserRepo.findById] Error (id: ${id}):`, error);
      throw error;
    }
  }

  /**
   * Busca usuario por email
   */
  async findByEmail(email) {
    try {
      return await User.findOne({ where: { email } });
    } catch (error) {
      if (showLogs) console.error(`🔥 [UserRepo.findByEmail] Error (email: ${email}):`, error);
      throw error;
    }
  }

  /**
   * Crea un nuevo registro
   */
  async create(data) {
    try {
      return await User.create(data);
    } catch (error) {
      if (showLogs) console.error('🔥 [UserRepo.create] Error:', error);
      throw error;
    }
  }

  /**
   * Actualiza un registro por ID
   */
  async update(id, data) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;
      return await user.update(data);
    } catch (error) {
      if (showLogs) console.error(`🔥 [UserRepo.update] Error (id: ${id}):`, error);
      throw error;
    }
  }

  /**
   * Elimina un registro por ID
   */
  async delete(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;
      await user.destroy();
      return true;
    } catch (error) {
      if (showLogs) console.error(`🔥 [UserRepo.delete] Error (id: ${id}):`, error);
      throw error;
    }
  }
}

export default new UserRepository();
