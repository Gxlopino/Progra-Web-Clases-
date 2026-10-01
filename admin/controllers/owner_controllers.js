// admin/controllers/carrer_controllers.js

export function home(req, res) {
  return res.render('owner/home', {
    title: 'Bienvenido Owner',
     });
}