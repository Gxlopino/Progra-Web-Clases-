// admin/services/profiles_services.js
import ProfileRepository from '../repositories/profiles_repositories.js';
import { Op } from 'sequelize';

/**
 * Obtener todas los perfiles sin paginación
 */
export const fetchAll = async () => {
  const profiles = await ProfileRepository.findAll();

  return profiles.map(profile => profile.toJSON());
};

/**
 * Obtener perfiles paginados con filtro por nombre
 */
export const fetchAllPaginatedSimple = async () => {
 
  // Obtener registros paginados
  const profiles = await ProfileRepository.findAllSimple({
    order: [['id', 'ASC']]
  });

  return profiles.map(profile => profile.toJSON());
};

export const fetchAllPaginated = async (page = 1, limit = 10, name = '') => {
  const offset = (page - 1) * limit;

  // Construir filtros
  const whereClause = {};
  if (name) {
    whereClause.name = {
      [Op.iLike]: `%${name}%`
    };
  }

  // Obtener total de registros
  const total = await ProfileRepository.count(whereClause);

  // Obtener registros paginados
  const profiles = await ProfileRepository.findAllPaginated({
    where: whereClause,
    offset: offset,
    limit: limit,
    order: [['id', 'DESC']]
  });

  const totalPages = Math.ceil(total / limit);
  const offsetResult = offset;

  return {
    profiles: profiles.map(profile => profile.toJSON()),
    total,
    totalPages,
    offset: offsetResult,
    page,
    limit
  };
};

/**
 * Obtener un perfil por su ID
 */
export const fetchById = async (id) => {
  const profile = await ProfileRepository.findById(id);

  if (!profile) {
    return null;
  }

  return profile.toJSON();
};

/**
 * Servicio para crear un perfil
 */
export const create = async (data) => {
  const newProfile = await ProfileRepository.create(data);
  return newProfile.toJSON();
};

/**
 * Servicio para actualizar un perfil
 */
export const update = async (id, data) => {
  const updatedProfile = await ProfileRepository.update(id, data);
  if (!updatedProfile) return null;
  return updatedProfile.toJSON();
};

/**
 * Servicio para eliminar un perfil
 */
export const remove = async (id) => {
  return await ProfileRepository.delete(id);
};