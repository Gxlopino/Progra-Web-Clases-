// admin/repositories/students_repositories.js
import Student from '../models/students.js';
import District from '../models/district.js';
import User from '../models/user.js';
import Carrer from '../models/carrer.js';
import Semester from '../models/semester.js';
import '../models/index.js';
import { Op } from 'sequelize';

const showLogs = process.env.SHOW_DB_ERRORS === 'true' || process.env.NODE_ENV === 'development';

const studentRelations = [
  { model: District, as: 'district' },
  { model: Carrer, as: 'carrers' },
  { model: Semester, as: 'semester' },
  { model: User, as: 'user' }
];

class StudentRepository {
  /**
   * Obtiene todos los registros
   */
  async findAll() {
    try {
      return await Student.findAll({
        include: studentRelations
      });
    } catch (error) {
      if (showLogs) console.error('🔥 [StudentRepo.findAll] Error:', error);
      throw error;
    }
  }

  /**
   * Obtiene registros con paginación
   */
  async findAllPaginated(options = {}) {
    try {
      const { where = {}, offset = 0, limit = 10, order = [['id', 'DESC']] } = options;
      return await Student.findAll({
        where,
        offset,
        limit,
        order,
        include: studentRelations
      });
    } catch (error) {
      if (showLogs) console.error('🔥 [StudentRepo.findAllPaginated] Error:', error);
      throw error;
    }
  }

  /**
   * Cuenta registros con filtros
   */
  async count(where = {}) {
    try {
      return await Student.count({ where });
    } catch (error) {
      if (showLogs) console.error('🔥 [StudentRepo.count] Error:', error);
      throw error;
    }
  }

  /**
   * Busca estudiante por ID
   */
  async findById(id) {
    try {
      return await Student.findByPk(id, {
        include: studentRelations
      });
    } catch (error) {
      if (showLogs) console.error(`🔥 [StudentRepo.findById] Error (id: ${id}):`, error);
      throw error;
    }
  }

  /**
   * Busca estudiante por email
   */
  async findByEmail(email) {
    try {
      return await Student.findOne({
        where: { email },
        include: studentRelations
      });
    } catch (error) {
      if (showLogs) console.error(`🔥 [StudentRepo.findByEmail] Error (email: ${email}):`, error);
      throw error;
    }
  }

  /**
   * Crea un nuevo registro
   */
  async create(data) {
    try {
      return await Student.create(data);
    } catch (error) {
      if (showLogs) console.error('🔥 [StudentRepo.create] Error:', error);
      throw error;
    }
  }

  /**
   * Actualiza un registro por ID
   */
  async update(id, data) {
    try {
      const student = await Student.findByPk(id);
      if (!student) return null;
      return await student.update(data);
    } catch (error) {
      if (showLogs) console.error(`🔥 [StudentRepo.update] Error (id: ${id}):`, error);
      throw error;
    }
  }

  /**
   * Elimina un registro por ID
   */
  async delete(id) {
    try {
      const student = await Student.findByPk(id);
      if (!student) return null;
      await student.destroy();
      return true;
    } catch (error) {
      if (showLogs) console.error(`🔥 [StudentRepo.delete] Error (id: ${id}):`, error);
      throw error;
    }
  }
}

export default new StudentRepository();
