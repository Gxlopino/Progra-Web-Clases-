import UserRepository from '../repositories/users_repositories.js';

export async function listUsersSimple(req, res) {
  try {
    const users = await UserRepository.findAll();
    return res.status(200).json({
      success: true,
      message: 'Usuarios listados correctamente',
      data: users.map((user) => user.toJSON()),
      error: null
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error al listar usuarios', data: null, error: error.message });
  }
}
