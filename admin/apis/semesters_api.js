import * as semesterService from '../services/semesters_services.js';

export async function listSemesters(req, res) {
  try {
    const semesters = await semesterService.fetchAll();
    return res.status(200).json({
      success: true,
      message: 'Semestres listados correctamente',
      data: semesters,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al listar semestres',
      data: null,
      error: error.message
    });
  }
}
