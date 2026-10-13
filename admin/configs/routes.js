// admin/configs/routes.js
import { Router } from 'express';
import * as admins from '../controllers/admin_controllers.js';
import * as carrers from '../controllers/carrer_controllers.js';
import * as owners from '../controllers/owner_controllers.js';
import * as enterprise from '../controllers/enterprise_controllers.js';
import * as nationApis from '../apis/nations_apis.js';
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
// carrers
router.get('/admin/carrers', carrers.home);
router.get('/owner', soloLogueado,soloOwner,owners.home);
router.get('/enterprise',soloLogueado,soloEnterprise, enterprise.home);
router.get('/enterprise/convocatorias',soloLogueado,soloEnterprise, enterprise.home);
router.get('/enterprise/convocatorias',soloLogueado,soloEnterprise,enterprise.home);
router.get('/enterprise/convocatorias/nueva',soloLogueado,soloEnterprise, enterprise.home);
router.get('/enterprise/postulantes',soloLogueado,soloEnterprise, enterprise.home);
router.get('/enterprise/perfil',soloLogueado,soloEnterprise, enterprise.home);
router.get('/enterprise/resenas',soloLogueado,soloEnterprise, enterprise.home);
router.get('/enterprise/cambiar-contrasena',soloLogueado,soloEnterprise, enterprise.home);
router.get('/enterprise/configuracion',soloLogueado,soloEnterprise, enterprise.home);
export default router;