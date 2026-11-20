// admin/configs/routes.js
import { Router } from 'express';
import * as admins from '../controllers/admin_controllers.js';
import * as carrers from '../controllers/carrer_controllers.js';
import * as owners from '../controllers/owner_controllers.js';
import * as enterprise from '../controllers/enterprise_controllers.js';
import * as nationApis from '../apis/nations_apis.js';
import * as carrers_api from '../apis/carrers_api.js';
import * as profiles_api from '../apis/profile_api.js';
import * as students_api from '../apis/students_api.js';
import * as districts_api from '../apis/districts_api.js';
import * as semesters_api from '../apis/semesters_api.js';
import * as amigos_api from '../apis/amigos_api.js';
import * as amigos2_api from '../apis/amigos2_api.js';
import * as users_api from '../apis/users_api.js';
import { redirectIfAuthenticated, requireAuth,soloEnterprise,soloLogueado,soloOwner } from '../../configs/middlewares.js'; 

const router = Router();

// react views
router.get('/admin', requireAuth, admins.home);
router.get('/admin/players', requireAuth, admins.home);
router.get('/admin/teams', requireAuth, admins.home);
router.get('/admin/leagues', requireAuth, admins.home);
router.get('/admin/nations', requireAuth, admins.home);
router.get('/admin/catalogs', requireAuth, admins.home);
// api nations
router.get('/api/v1/nations', nationApis.listNations);
router.get('/api/v1/nations/:id', nationApis.getNationById);
router.post('/api/v1/nations', nationApis.createNation);
router.put('/api/v1/nations/:id', nationApis.updateNation);
router.delete('/api/v1/nations/:id', nationApis.deleteNation);

// api carrers
router.get('/api/v1/carrers', carrers_api.listCarrersSimple);
router.post('/api/v1/carrers', carrers_api.createCarrer);
router.delete('/api/v1/carrers/:id',carrers_api.deleteCarrer);
router.get('/api/v1/carrers/:id', carrers_api.getCarrerById);
router.put('/api/v1/carrers/:id', carrers_api.updateCarrer);

// api profiles
router.get('/api/v1/profiles', profiles_api.listProfilesSimple);
router.post('/api/v1/profiles', profiles_api.createProfile);
router.delete('/api/v1/profiles/:id', profiles_api.deleteProfile);
router.get('/api/v1/profiles/:id', profiles_api.getProfileById);
router.put('/api/v1/profiles/:id', profiles_api.updateProfile);

// api students
router.get('/api/v1/students', students_api.listStudents);
router.get('/api/v1/students/:id', students_api.getStudentById);
router.post('/api/v1/students', students_api.createStudent);
router.put('/api/v1/students/:id', students_api.updateStudent);
router.delete('/api/v1/students/:id', students_api.deleteStudent);

// api amigos
router.get('/api/v1/amigos', amigos_api.listamigos);
router.get('/api/v1/amigos/:id', amigos_api.getamigosById);
router.post('/api/v1/amigos', amigos_api.createamigos);
router.put('/api/v1/amigos/:id', amigos_api.updateamigos);
router.delete('/api/v1/amigos/:id', amigos_api.deleteamigos);

// api amigos2
router.get('/api/v1/amigos2', amigos2_api.listAmigos2);
router.get('/api/v1/amigos2/:id', amigos2_api.getAmigo2ById);
router.post('/api/v1/amigos2', amigos2_api.createAmigo2);
router.put('/api/v1/amigos2/:id', amigos2_api.updateAmigo2);
router.delete('/api/v1/amigos2/:id', amigos2_api.deleteAmigo2);
router.get('/api/v1/users', users_api.listUsersSimple);


router.get('/api/v1/districts', districts_api.listDistricts);
router.get('/api/v1/semesters', semesters_api.listSemesters);

// carrers
router.get('/admin/carrers', carrers.home);
router.get('/owner', soloLogueado,soloOwner,owners.home);
router.get('/enterprise/carrers', enterprise.home);
router.get('/enterprise/carrers/new', enterprise.home);
router.get('/enterprise/carrers/:id/edit', enterprise.home);
router.get('/enterprise', enterprise.home);
router.get('/enterprise/convocatorias', enterprise.home);
router.get('/enterprise/convocatorias',enterprise.home);
router.get('/enterprise/convocatorias/nueva', enterprise.home);
router.get('/enterprise/postulantes', enterprise.home);
router.get('/enterprise/perfil', enterprise.home);
router.get('/enterprise/resenas', enterprise.home);
router.get('/enterprise/cambiar-contrasena', enterprise.home);
router.get('/enterprise/configuracion', enterprise.home);
router.get('/enterprise/students', enterprise.home);
router.get('/enterprise/students/new', enterprise.home);
router.get('/enterprise/students/:id/edit', enterprise.home);
router.get('/enterprise/profiles', enterprise.home);
router.get('/enterprise/profiles/new', enterprise.home);
router.get('/enterprise/profiles/:id/edit', enterprise.home);
router.get('/enterprise/amigos', enterprise.home);
router.get('/enterprise/amigos/new', enterprise.home);
router.get('/enterprise/amigos/:id/edit', enterprise.home);
router.get('/enterprise/amigos2', enterprise.home);
router.get('/enterprise/amigos2/new', enterprise.home);
router.get('/enterprise/amigos2/:id/edit', enterprise.home);
export default router;