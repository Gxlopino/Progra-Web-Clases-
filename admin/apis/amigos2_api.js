// admin/apis/amigos2_api.js
import * as amigos2Service from '../services/amigos2_services.js';

export async function listAmigos2(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    const userId = req.query.user_id || '';
    const result = await amigos2Service.fetchAllPaginated(page, limit, search, userId);

    return res.status(200).json({
      success: true,
      message: 'Amigos2 listados correctamente',
      data: {
        list: result.amigos,
        total: result.total,
        pages: result.totalPages,
        offset: result.offset,
        limit: result.limit,
        page: result.page
      },
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al listar amigos2',
      data: null,
      error: error.message
    });
  }
}

export async function getAmigo2ById(req, res) {
  try {
    const { id } = req.params;
    const amigo = await amigos2Service.fetchById(id);

    if (!amigo) {
      return res.status(404).json({
        success: false,
        message: 'Amigo2 no encontrado',
        data: null,
        error: `No existe el amigo2 con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Amigo2 obtenido correctamente',
      data: amigo,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al buscar amigo2',
      data: null,
      error: error.message
    });
  }
}

export async function createAmigo2(req, res) {
  try {
    const newAmigo = await amigos2Service.create(req.body);

    return res.status(201).json({
      success: true,
      message: 'Amigo2 creado correctamente',
      data: newAmigo,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al crear amigo2',
      data: null,
      error: error.message
    });
  }
}

export async function updateAmigo2(req, res) {
  try {
    const { id } = req.params;
    const updatedAmigo = await amigos2Service.update(id, req.body);

    if (!updatedAmigo) {
      return res.status(404).json({
        success: false,
        message: 'Amigo2 no encontrado',
        data: null,
        error: `No existe el amigo2 con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Amigo2 actualizado correctamente',
      data: updatedAmigo,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al actualizar amigo2',
      data: null,
      error: error.message
    });
  }
}

export async function deleteAmigo2(req, res) {
  try {
    const { id } = req.params;
    const removed = await amigos2Service.remove(id);

    if (!removed) {
      return res.status(404).json({
        success: false,
        message: 'Amigo2 no encontrado',
        data: null,
        error: `No existe el amigo2 con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Amigo2 eliminado correctamente',
      data: null,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar amigo2',
      data: null,
      error: error.message
    });
  }
}
