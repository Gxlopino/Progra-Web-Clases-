// admin/services/amigos_services.js
import amigosRepository from '../repositories/amigos_repositories.js';
import { Op } from 'sequelize';

/**
 * Obtener todos los estudiantes
 */
export const fetchAll = async () => {
  const amigos = await amigosRepository.findAll();
  return amigos.map(amigos => amigos.toJSON());
};

/**
 * Obtener estudiantes paginados con filtro por nombre o apellido
 */
export const fetchAllPaginated = async (page = 1, limit = 10, search = '') => {
  const offset = (page - 1) * limit;

  const whereClause = {};

  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.iLike]: `%${search}%` } },
      { apellido: { [Op.iLike]: `%${search}%` } },
      { celular: { [Op.iLike]: `%${search}%` } }
    ];
  }

  const total = await amigosRepository.count(whereClause);

  const amigos = await amigosRepository.findAllPaginated({
    where: whereClause,
    offset,
    limit,
    order: [['id', 'DESC']]
  });

  const totalPages = Math.ceil(total / limit);

  return {
    amigos: amigos.map(amigos => amigos.toJSON()),
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
  const amigos = await amigosRepository.findById(id);
  if (!amigos) return null;
  return amigos.toJSON();
};

/**
 * Crear un estudiante
 */
export const create = async (data) => {
  const newamigos = await amigosRepository.create(data);
  return newamigos.toJSON();
};

/**
 * Actualizar un estudiante
 */
export const update = async (id, data) => {
  const updatedamigos = await amigosRepository.update(id, data);
  if (!updatedamigos) return null;
  return updatedamigos.toJSON();
};

/**
 * Eliminar un estudiante
 */
export const remove = async (id) => {
  return await amigosRepository.delete(id);
};
