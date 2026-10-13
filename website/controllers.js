// website/controllers.js
export function home(req, res) {
  return res.render('website/home', {
    title: 'Crear cuenta :)',
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}
export function register(req, res) {
  return res.render('website/register', {
    title: 'Crear cuenta :)',
  });
}

export function convocatorias(req, res) {
  return res.render('website/convocatorias', {
    title: 'Convocatorias',
  });
}

export function empresas(req, res) {
  return res.render('website/empresas', {
    title: 'Empresas',
  });
}

export function como_funciona(req, res) {
  return res.render('website/como-funciona', {
    title: 'Como funciona',
  });
}

export function login(req, res) {
  let fondos =["/assets/img/Ulimafondo.png","/assets/img/Ulimafondo2.png","/assets/img/Ulimafondo3.jpg"]
  return res.render('website/login', {
    title: 'Iniciar Sesion',
    mensaje:null,
    background: fondos[Math.floor(Math.random() * 3)]
  });
}

export function ResetPassword(req, res) {
  let fondos =["/assets/img/Ulimafondo.png","/assets/img/Ulimafondo2.png","/assets/img/Ulimafondo3.jpg"]
  return res.render('website/reset-password', {
    title: 'Recuperar Cuenta',
    background: fondos[Math.floor(Math.random() * 3)]
  });
}

export function ingresar(req, res) {
  const fondos = [
    "/assets/img/Ulimafondo.png",
    "/assets/img/Ulimafondo2.png",
    "/assets/img/Ulimafondo3.jpg"
  ];

  const { user, pass } = req.body || {};
  console.log("user:", user);
  console.log("pass:", pass);

  const users = [
    { user: "owner", pass: "123", role: "owner" },
    { user: "enterprise", pass: "123", role: "enterprise" }
  ];

  const userFound = users.find((u) => u.user === user && u.pass === pass);
  console.log("userFound:", userFound);

  if (!userFound) {
    return res.status(401).render("website/login", {
      title: "Bienvenido",
      user,
      mensaje: "usuario y contraseña no coincide",
      error: "Credenciales inválidas",
      background: fondos[Math.floor(Math.random() * fondos.length)]
    });
  }

  req.session.user = {
    id: Date.now(),
    user: userFound.user,
    role: userFound.role
  };

  req.session.role = userFound.role;

  return req.session.save(() => {
    return res.redirect("/" + userFound.role);
  });
}

export function about(req, res) {
  return res.render('website/about', {
    title: 'Acerca de',
    currentPage: 'about',
    description:'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.',

  });
}


export function contact(req, res) {
  return res.render('website/contact', {
    title: 'Acerca de',
    currentPage: 'contact',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function players(req, res) {
  return res.render('website/players', {
    title: 'Acerca de',
    currentPage: 'players',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function signIn(req, res) {
  return res.render('website/sign-in', {
    title: 'Bienvenido',
  });
}

export async function login2(req, res) {
  const { user, password } = req.body;
  const validUser = process.env.DEFAULT_USER || 'admin';
  const validPassword = process.env.DEFAULT_PASSWORD || '123';

  if (validUser == user && validPassword == password) {
    req.session.user = {id:1, username: user};

    req.flash('success', '¡Bienvenido! Has iniciado sesión correctamente.');
    
    return req.session.save(() => {
      res.redirect('/admin');
    });
  }

  // ❌ credenciales incorrectas
  req.flash('error', 'Credenciales incorrectas');
  
  // ✅ Extraer flash messages manualmente antes de renderizar
  const success_messages = req.flash('success');
  const error_messages = req.flash('error');
  const warning_messages = req.flash('warning');
  const info_messages = req.flash('info');
  
  const hasFlashMessages = 
    success_messages.length > 0 ||
    error_messages.length > 0 ||
    warning_messages.length > 0 ||
    info_messages.length > 0;

  console.log("1 +++++++++++++++++++++++++++++++++++++")

  res.render('website/sign-in', {
    title: 'Iniciar Sesión',
    user: user, // Mantener el usuario en el formulario
    
    // ✅ Pasar explícitamente los flash messages
    success_messages,
    error_messages,
    warning_messages,
    info_messages,
    hasFlashMessages
  });
}

export function logout(req, res) {
  req.session.destroy(err => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
      return res.redirect('/');
    }

    // Limpia la cookie de sesión (opcional pero recomendado)
    res.clearCookie('connect.sid');

    // Redirige al login
    res.redirect('/login');
  });
}