// admin/repositories/amigos_repositories.js
import amigos from '../models/amigos.js';
import { Op } from 'sequelize';

const showLogs = process.env.SHOW_DB_ERRORS === 'true' || process.env.NODE_ENV === 'development';

class amigosRepository {
  /**
   * Obtiene todos los registros
   */
  async findAll() {
    try {
      return await amigos.findAll();
    } catch (error) {
      if (showLogs) console.error('🔥 [amigosRepo.findAll] Error:', error);
      throw error;
    }
  }

  /**
   * Obtiene registros con paginación
   */
  async findAllPaginated(options = {}) {
    try {
      const { where = {}, offset = 0, limit = 10, order = [['id', 'DESC']] } = options;
      return await amigos.findAll({
        where,
        offset,
        limit,
        order
      });
    } catch (error) {
      if (showLogs) console.error('🔥 [amigosRepo.findAllPaginated] Error:', error);
      throw error;
    }
  }

  /**
   * Cuenta registros con filtros
   */
  async count(where = {}) {
    try {
      return await amigos.count({ where });
    } catch (error) {
      if (showLogs) console.error('🔥 [amigosRepo.count] Error:', error);
      throw error;
    }
  }

  /**
   * Busca estudiante por ID
   */
  async findById(id) {
    try {
      return await amigos.findByPk(id);
    } catch (error) {
      if (showLogs) console.error(`🔥 [amigosRepo.findById] Error (id: ${id}):`, error);
      throw error;
    }
  }

  /**
   * Crea un nuevo registro
   */
  async create(data) {
    try {
      return await amigos.create(data);
    } catch (error) {
      if (showLogs) console.error('🔥 [amigosRepo.create] Error:', error);
      throw error;
    }
  }

  /**
   * Actualiza un registro por ID
   */
  async update(id, data) {
    try {
      const amigo = await amigos.findByPk(id);
      if (!amigo) return null;
      return await amigo.update(data);
    } catch (error) {
      if (showLogs) console.error(`🔥 [amigosRepo.update] Error (id: ${id}):`, error);
      throw error;
    }
  }

  /**
   * Elimina un registro por ID
   */
  async delete(id) {
    try {
      const amigo = await amigos.findByPk(id);
      if (!amigo) return null;
      await amigo.destroy();
      return true;
    } catch (error) {
      if (showLogs) console.error(`🔥 [amigosRepo.delete] Error (id: ${id}):`, error);
      throw error;
    }
  }
}

export default new amigosRepository();
