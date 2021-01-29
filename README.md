# Proyecto Trianafy
### Hecho por Sergio Ortiz Molde
### ACCESO A DATOS Y PROGRAMACIÓN DE SERVICIOS Y PROCESOS

## INTRODUCCIÓN
El proyecto consiste en la implementación de una API REST con las tecnologías aprendidas en clase (express.js sobre node.js, mongodb y mongoose). La API servirá a una aplicación llamada Trianafy, que gestiona listas de reproducción de música.

### Pasos para ejecutar el proyecto:

1. Clonar el repositorio
2. Instalar las dependencias con `npm i`
    #### A caso de que no se haya guardado bien el .gitignore
     - Crear un fichero .env en la raiz del repositorio que contenga las siguientes variables de entorno:
        - PORT=3000 #Puerto de ejecución de express
        - DB_URI=mongodb://localhost/trianafy #URI de conexión a la base de datos de mongo para mongoose
        - JWT_SECRET #Cadena para encryptar el jwt
        - BCRYPT_ROUNDS=12 #Rondas de encryptación de bcrypt
        - JWT_LIFETIME=7d #Tiempo en el que va a caducar el jwt
        - JWT_ALGORITHM=HS256 #Algoritmo de jwt
3. Ejecutar el proyecto usando el comando `npm start`.

### ENDPOINTS 
En este proyecto encontramos 4 diferentes **endpoints**:
- /songs
- /list
- /auth
- /list:id/songs

Cada endpoint usa diferentes rutas:
- /songs:
    - `GET` / : Obtiene todas las canciones de la base de datos.
    - `POST` / : Añade una canción a la base de datos.
    - `GET` /:id : Busca una canción mediante su id.
    - `PUT` /:id : Modifica una canción.
    - `DELETE` /:id : Borra una canción.

- /lists:
    - `GET` / : Obtiene todas las playlists de la base de datos.
    - `POST` / : Añade una playlist a la base de datos.
    - `GET` /:id : Busca una playlist mediante su id.
    - `PUT` /:id : Modifica una playlist.
    - `DELETE` /:id : Borra una playlist.
- /auth:
    - `POST` /login : Autentifica a un usuario, y genera un token con el que puede acceder a todas las demás peticiones.
    - `POST` /register : Registra a un nuevo usuario en base a lo que se le haya pasado en el body de la petición.

## Dependencias usadas en este proyecto:
- bcryptjs
- body-parser
- cors
- dotenv
- express
- express-validator
- jsonwebtoken
- mongoose
- morgan
- morgan-body
- passport
- passport-jwt
- passport-local
