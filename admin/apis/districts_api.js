import * as districtService from '../services/districts_services.js';

export async function listDistricts(req, res) {
  try {
    const districts = await districtService.fetchAll();
    return res.status(200).json({
      success: true,
      message: 'Distritos listados correctamente',
      data: districts,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al listar distritos',
      data: null,
      error: error.message
    });
  }
}
