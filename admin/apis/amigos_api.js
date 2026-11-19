// admin/apis/amigos_api.js
import * as amigosService from '../services/amigos_services.js';

export async function listamigos(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    const result = await amigosService.fetchAllPaginated(page, limit, search);

    return res.status(200).json({
      success: true,
      message: 'Amigos listados correctamente',
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
      message: 'Error al listar amigos',
      data: null,
      error: error.message
    });
  }
}

export async function getamigosById(req, res) {
  try {
    const { id } = req.params;
    const amigos = await amigosService.fetchById(id);

    if (!amigos) {
      return res.status(404).json({
        success: false,
        message: 'Amigo no encontrado',
        data: null,
        error: `No existe el amigo con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Amigo obtenido correctamente',
      data: amigos,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al buscar amigo',
      data: null,
      error: error.message
    });
  }
}

export async function createamigos(req, res) {
  try {
    const newamigos = await amigosService.create(req.body);

    return res.status(201).json({
      success: true,
      message: 'amigo creado correctamente',
      data: newamigos,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al crear amigo',
      data: null,
      error: error.message
    });
  }
}

export async function updateamigos(req, res) {
  try {
    const { id } = req.params;
    const updatedamigos = await amigosService.update(id, req.body);

    if (!updatedamigos) {
      return res.status(404).json({
        success: false,
        message: 'amigo no encontrado',
        data: null,
        error: `No existe el amigo con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'amigo actualizado correctamente',
      data: updatedamigos,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al actualizar amigo',
      data: null,
      error: error.message
    });
  }
}

export async function deleteamigos(req, res) {
  try {
    const { id } = req.params;
    const removed = await amigosService.remove(id);

    if (!removed) {
      return res.status(404).json({
        success: false,
        message: 'amigo no encontrado',
        data: null,
        error: `No existe el amigo con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'amigo eliminado correctamente',
      data: null,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar amigo',
      data: null,
      error: error.message
    });
  }
}
