

# Gestor de Usuarios – API REST con Node.js, Express y MySQL

En el siguiente proyecto se desarrolla una API REST sencilla que permite realizar operaciones CRUD sobre una tabla de usuarios. Utiliza Node.js, Express, Sequelize y MySQL.

## Tecnologías utilizadas
- Node.js
- Express
- Sequelize (ORM)
- MySQL
- dotenv
- Docker (opcional para despliegue)
- Docker Compose

## Requisitos previos
- Node.js instalado
- MySQL corriendo localmente
- Git instalado 

## Instalación de la API de gestion de usuarios (ejecicion local sin Docker)

1. ### Clonar el siguiente repositorio
    git clone https://github.com/fermumu/GestorUsuarios.git
    cd GestorUsuarios

2. ### Instala las dependencias
    npm install

3. ### Configura las variables de entorno
    - Copia el archivo .env.template y renombra  a =>  .env
    - cambiar las variables de entorno de (
        DB_PASSWORD= Digite la contraseña de su base de datos (si su base de datos no requiere contraseña deje el espacio en blanco)
        DB_NAME= Digite el nombre de la base de datos con la que desee probar esta API
        )

4. ### Verifica que tu base de datos exista
    Crea una base de datos con el mismo nombre declarado en las variables de entorno en el punto anterior en MySQL 

5. ### Levantar el servidor
    Digite en la terminal el siguiente comando y precione enter : node app.js

## Ejecucion de la API con Docker
### Requisitos previos
    - Asegurar tener Docker Desktop instalado en tu sistema
    - Docker desktop debe estar corriendo (Engine running)

1. ### Clona el repositorio
    git clone https://github.com/fermumu/GestorUsuarios.git
    cd GestorUsuarios

2. ### En la terminal (bash) jecuta la API con Docker compose
    docker-compose up --build

    Esto levantará:

- Un contenedor para la API (api-backend)
- Un contenedor para MySQL (mysql)
- Una red interna para que se comuniquen
- Un volumen persistente para los datos de MySQL

## Endpoints/metodos principales que puede usar

| Método | Ruta             | Descripción               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/users`     | Listar todos los usuarios |
| GET    | `/api/users/:id` | Obtener usuario por ID    |
| POST   | `/api/users`     | Crear nuevo usuario       |
| PUT    | `/api/users/:id` | Actualizar usuario        |
| DELETE | `/api/users/:id` | Eliminar usuario          |


# Estructura del proyecto

adminUsers/
│
├── config/             # Configuración de Sequelize y base de datos
│   └── dataBase.js
│
├── controllers/        # Lógica de negocio (CRUD)
│   └── userController.js
│
├── models/             # Definición del modelo de usuario
│   └── userModel.js
│
├── routes/             # Enrutamiento de endpoints
│   └── userRoutes.js
│
├── .env                # Variables de entorno (no subir al repo)
├── .gitignore          # Ignora node_modules, .env, etc.
├── .dockerignore       # Ignora archivos innecesarios para el contenedor
├── Dockerfile          # Imagen personalizada de Node.js para la API
├── docker-compose.yml  # Orquestación de contenedores (API + MySQL)
├── app.js              # Archivo principal de ejecución
└── README.md           # Esta documentación


# Notas
- Para probar los endpoints puedes usar Postman o cualquier cliente HTTP.
- La tabla se crea automáticamente al ejecutar el servidor si no existe, si ya existe, el sistema no creara otra tabla.
- Si la API se ejecuta con docker los datos se almacenan en un volumen docker para persistencia
