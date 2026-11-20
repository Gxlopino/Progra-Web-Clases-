import amigos2Repository from '../repositories/amigos2_repositories.js';
import { Op } from 'sequelize';

export const fetchAll = async () => {
  const amigos = await amigos2Repository.findAll();
  return amigos.map((amigo) => amigo.toJSON());
};

export const fetchAllPaginated = async (page = 1, limit = 10, search = '', userId = '') => {
  const offset = (page - 1) * limit;
  const where = {};

  if (search) {
    where[Op.or] = [
      { name: { [Op.iLike]: `%${search}%` } },
      { apellido: { [Op.iLike]: `%${search}%` } },
      { celular: { [Op.iLike]: `%${search}%` } },
      { email: { [Op.iLike]: `%${search}%` } }
    ];
  }

  if (userId) {
    where.user_id = Number(userId);
  }

  const total = await amigos2Repository.count(where);
  const registros = await amigos2Repository.findAllPaginated({
    where,
    offset,
    limit,
    order: [['id', 'DESC']]
  });

  return {
    amigos: registros.map((registro) => registro.toJSON()),
    total,
    totalPages: Math.ceil(total / limit),
    offset,
    page,
    limit
  };
};

export const fetchById = async (id) => {
  const amigo = await amigos2Repository.findById(id);
  return amigo ? amigo.toJSON() : null;
};

export const fetchByEmail = async (email) => {
  const amigo = await amigos2Repository.findByEmail(email);
  if (!amigo) return null;
  return amigo.toJSON();
};

export const create = async (data) => {
  const amigo = await amigos2Repository.create(data);
  return amigo.toJSON();
};

export const update = async (id, data) => {
  const amigo = await amigos2Repository.update(id, data);
  return amigo ? amigo.toJSON() : null;
};

export const remove = async (id) => amigos2Repository.delete(id);
