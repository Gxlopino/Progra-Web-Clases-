// admin/apis/students_api.js
import * as studentService from '../services/students_services.js';

export async function listStudents(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    const result = await studentService.fetchAllPaginated(page, limit, search);

    return res.status(200).json({
      success: true,
      message: 'Estudiantes listados correctamente',
      data: {
        list: result.students,
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
      message: 'Error al listar estudiantes',
      data: null,
      error: error.message
    });
  }
}

export async function getStudentById(req, res) {
  try {
    const { id } = req.params;
    const student = await studentService.fetchById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Estudiante no encontrado',
        data: null,
        error: `No existe el estudiante con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Estudiante obtenido correctamente',
      data: student,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al buscar estudiante',
      data: null,
      error: error.message
    });
  }
}

export async function createStudent(req, res) {
  try {
    const newStudent = await studentService.create(req.body);

    return res.status(201).json({
      success: true,
      message: 'Estudiante creado correctamente',
      data: newStudent,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al crear estudiante',
      data: null,
      error: error.message
    });
  }
}

export async function updateStudent(req, res) {
  try {
    const { id } = req.params;
    const updatedStudent = await studentService.update(id, req.body);

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: 'Estudiante no encontrado',
        data: null,
        error: `No existe el estudiante con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Estudiante actualizado correctamente',
      data: updatedStudent,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al actualizar estudiante',
      data: null,
      error: error.message
    });
  }
}

export async function deleteStudent(req, res) {
  try {
    const { id } = req.params;
    const removed = await studentService.remove(id);

    if (!removed) {
      return res.status(404).json({
        success: false,
        message: 'Estudiante no encontrado',
        data: null,
        error: `No existe el estudiante con el id ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Estudiante eliminado correctamente',
      data: null,
      error: null
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: 'Error al eliminar estudiante',
      data: null,
      error: error.message
    });
  }
}
