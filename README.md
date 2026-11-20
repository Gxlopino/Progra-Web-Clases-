# Plataforma de Empleo

Aplicacion web full-stack para gestionar carreras, perfiles, estudiantes, empresas, convocatorias y postulaciones.

El proyecto combina:

- React 18 y Vite para las interfaces del panel.
- Node.js y Express para el servidor y las APIs.
- PostgreSQL, compatible con Supabase, como base de datos.
- Sequelize para el acceso desde la aplicacion.
- Dbmate para las migraciones SQL.
- EJS para las vistas servidas por Express.

## Requisitos

- Node.js 18 o superior.
- npm.
- PostgreSQL o un proyecto de Supabase.
- Git, si se desea trabajar con el repositorio.

## Instalacion

Desde la carpeta raiz del proyecto:

```bash
npm install
```

Crea un archivo `.env` en la raiz. No subas este archivo al repositorio porque contiene credenciales.

```env
NODE_ENV=development
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASS=tu_contrasena
DB_SSL=false

SESSION_SECRET=una-clave-local
CORS_ORIGIN=http://localhost:3000
SHOW_DB_ERRORS=true
```

Para Supabase, usa los datos de conexion de tu proyecto y normalmente configura:

```env
DB_SSL=true
```

## Base de datos

Las migraciones se encuentran en `db/migrations/` y utilizan los comentarios `-- migrate:up` y `-- migrate:down`.

Aplicar las migraciones pendientes:

```bash
npm run db:up
```

Crear una migracion nueva:

```bash
npm run db:new -- nombre_de_la_migracion
```

Revertir la ultima migracion:

```bash
npm run db:rollback
```

Actualizar el archivo `db/schema.sql` desde la base de datos:

```bash
npm run db:dump
```

Crear un volcado completo de datos:

```bash
npm run db:dumpdata
```

Dbmate registra las migraciones aplicadas en la tabla `schema_migrations`. Si editas una migracion que ya fue aplicada, sus cambios no se ejecutaran otra vez. En ese caso crea una nueva migracion.

## Ejecutar el proyecto

### Desarrollo en Windows

En una terminal, genera el frontend:

```bash
npx vite build
```

En otra terminal, inicia Express:

```bash
npm run dev-server
```

El servidor queda disponible en:

```text
http://localhost:3000
```

El comando previsto para levantar frontend y backend juntos es:

```bash
npm run dev
```

Si ese comando falla en Windows por `mkdir -p`, usa las dos instrucciones anteriores o ejecuta directamente `npx vite build`.

### Compilacion de produccion

```bash
npx vite build
```

Los archivos compilados se generan en `public/dist/`.

Para revisar el build con Vite:

```bash
npm run preview
```

## Arquitectura

```text
admin/
  apis/          Handlers HTTP de los endpoints administrativos.
  configs/       Registro de rutas del panel y la API.
  controllers/   Controladores del panel y respuestas HTTP.
  models/        Modelos Sequelize.
  repositories/  Consultas y operaciones sobre la base de datos.
  services/      Logica de negocio.

api/             Entrada de la funcion para despliegues serverless.
configs/         Base de datos, middlewares y bootstrap de Express.
db/
  migrations/    Migraciones ejecutables con Dbmate.
  schema.sql     Volcado del esquema de la base de datos.
docs/            Diagramas y documentacion de la base de datos.
public/          Archivos publicos y bundles compilados.
src/
  entries/       Entradas React para cada panel o sitio.
  pages/         Paginas de React.
  partials/      Cabecera, sidebar, footer y componentes compartidos.
  helpers/       Funciones auxiliares del frontend.
  widgets/       Componentes reutilizables.
views/           Plantillas EJS renderizadas por Express.
website/         Logica del sitio publico.
server.js        Punto de entrada del servidor local.
vite.config.js   Configuracion de Vite y sus entradas.
vercel.json      Configuracion de despliegue en Vercel.
```

## Flujo de una solicitud

En el panel administrativo, una solicitud normalmente sigue este recorrido:

```text
React
  -> ruta HTTP
  -> API o controlador
  -> service
  -> repository
  -> modelo Sequelize
  -> PostgreSQL
```

Las rutas de la API se registran principalmente en `admin/configs/routes.js`.

## API principal

La base de las rutas administrativas es `/api/v1`.

| Recurso | GET lista | GET detalle | POST | PUT | DELETE |
|---|---|---|---|---|---|
| Naciones | `/api/v1/nations` | `/api/v1/nations/:id` | Si | Si | Si |
| Carreras | `/api/v1/carrers` | `/api/v1/carrers/:id` | Si | Si | Si |
| Perfiles | `/api/v1/profiles` | `/api/v1/profiles/:id` | Si | Si | Si |
| Estudiantes | `/api/v1/students` | `/api/v1/students/:id` | Si | Si | Si |
| Amigos | `/api/v1/amigos` | `/api/v1/amigos/:id` | Si | Si | Si |
| Distritos | `/api/v1/districts` | No disponible | No disponible | No disponible | No disponible |
| Semestres | `/api/v1/semesters` | No disponible | No disponible | No disponible | No disponible |

Ejemplo para listar carreras:

```bash
curl http://localhost:3000/api/v1/carrers
```

Ejemplo para crear un amigo:

```bash
curl -X POST http://localhost:3000/api/v1/amigos ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Alain\",\"apellido\":\"Choy\",\"celular\":\"987654321\"}"
```

En PowerShell se puede usar `curl.exe` o `Invoke-RestMethod`.

## Paneles y rutas React

El frontend tiene entradas independientes configuradas en `vite.config.js`:

- `web`: sitio publico.
- `admin`: panel administrativo.
- `owner`: panel del propietario.
- `enterprise`: panel de la empresa.

Rutas relevantes del panel de empresa:

- `/enterprise`
- `/enterprise/carrers`
- `/enterprise/profiles`
- `/enterprise/students`
- `/enterprise/amigos`
- `/enterprise/convocatorias`
- `/enterprise/postulantes`
- `/enterprise/perfil`
- `/enterprise/resenas`

Cuando se agrega una pagina React, se debe verificar que exista la cadena completa:

1. Componente en `src/pages/enterprise/`.
2. Import en `src/entries/enterprise.jsx`.
3. Ruta React dentro de `enterprise.jsx`.
4. Enlace en el sidebar, si corresponde.
5. Endpoint backend si la pagina consulta datos.
6. Nuevo build con `npx vite build`.

## Modelos y base de datos

Los modelos Sequelize deben usar el mismo nombre que las tablas PostgreSQL. Por ejemplo:

```js
{
  tableName: 'amigos',
  timestamps: false
}
```

Las columnas de la tabla `amigos` son:

- `id`
- `name`
- `apellido`
- `celular`

Al cambiar la estructura de una tabla, crea una migracion nueva y despues ejecuta:

```bash
npm run db:up
```

## Calidad y comprobaciones

Ejecutar el linter:

```bash
npm run lint
```

Construir el frontend para detectar imports, errores de JSX y problemas de Vite:

```bash
npx vite build
```

Comprobar manualmente un endpoint:

```bash
curl http://localhost:3000/api/v1/amigos
```

Si una pagina aparece en blanco:

1. Revisa la consola del navegador.
2. Comprueba que el endpoint responda con estado 200.
3. Ejecuta `npx vite build`.
4. Reinicia `npm run dev-server`.
5. Recarga con `Ctrl + F5`.

## Despliegue en Vercel

Instala la CLI e inicia sesion:

```bash
npm install -g vercel
vercel login
```

Configura en Vercel las variables de entorno de la base de datos y la sesion. Despues despliega:

```bash
vercel --prod
```

`vercel.json` configura el build estatico de `public/dist` y la funcion serverless `api/index.js`.

## Convenciones recomendadas

- Usa nombres consistentes entre tabla, modelo, repositorio, servicio y endpoint.
- No guardes contrasenas, tokens ni archivos `.env` en Git.
- No edites una migracion que ya fue aplicada; crea otra.
- Valida los campos obligatorios antes de insertarlos.
- Mantiene las consultas en repositories y la logica de negocio en services.
- Verifica el build despues de cambiar imports o rutas React.

## Git basico

```bash
git status
git add .
git commit -m "Descripcion del cambio"
git log --oneline
git branch
git switch -c nombre-de-la-rama
```

## Licencia

No se ha definido una licencia para este proyecto.
