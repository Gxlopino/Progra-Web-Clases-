// admin/services/students_services.js
import studentRepository from '../repositories/students_repositories.js';
import { Op } from 'sequelize';

/**
 * Obtener todos los estudiantes
 */
export const fetchAll = async () => {
  const students = await studentRepository.findAll();
  return students.map(student => student.toJSON());
};

/**
 * Obtener estudiantes paginados con filtro por nombre o apellido
 */
export const fetchAllPaginated = async (page = 1, limit = 10, search = '') => {
  const offset = (page - 1) * limit;

  const whereClause = {};

  if (search) {
    whereClause[Op.or] = [
      { names: { [Op.iLike]: `%${search}%` } },
      { last_names: { [Op.iLike]: `%${search}%` } },
      { email: { [Op.iLike]: `%${search}%` } }
    ];
  }

  const total = await studentRepository.count(whereClause);

  const students = await studentRepository.findAllPaginated({
    where: whereClause,
    offset,
    limit,
    order: [['id', 'DESC']]
  });

  const totalPages = Math.ceil(total / limit);

  return {
    students: students.map(student => student.toJSON()),
    total,
    totalPages,
    offset,
    page,
    limit
  };
};

/**
 * Obtener un estudiante por su ID
 */
export const fetchById = async (id) => {
  const student = await studentRepository.findById(id);
  if (!student) return null;
  return student.toJSON();
};

/**
 * Obtener un estudiante por email
 */
export const fetchByEmail = async (email) => {
  const student = await studentRepository.findByEmail(email);
  if (!student) return null;
  return student.toJSON();
};

/**
 * Crear un estudiante
 */
export const create = async (data) => {
  const newStudent = await studentRepository.create(data);
  return newStudent.toJSON();
};

/**
 * Actualizar un estudiante
 */
export const update = async (id, data) => {
  const updatedStudent = await studentRepository.update(id, data);
  if (!updatedStudent) return null;
  return updatedStudent.toJSON();
};

/**
 * Eliminar un estudiante
 */
export const remove = async (id) => {
  return await studentRepository.delete(id);
};
