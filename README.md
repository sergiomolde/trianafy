# Proyecto Trianafy
### Hecho por Sergio Ortiz Molde
### ACCESO A DATOS Y PROGRAMACIÓN DE SERVICIOS Y PROCESOS

## INTRODUCCIÓN
El proyecto consiste en la implementación de una API REST con las tecnologías aprendidas en clase (express.js sobre node.js, mongodb y mongoose). La API servirá a una aplicación llamada Trianafy, que gestiona listas de reproducción de música.

### Pasos para ejecutar el proyecto:

1. Clonar el repositorio.
2. Instalar los paquetes con `npm i`.
    #### A caso de que no se haya guardado bien en el .gitignore
     - Crear un fichero .env en la raiz del repositorio que contenga las siguientes variables de entorno:
        - PORT=9000
        - DB_URI=mongodb://localhost/trianafy
        - JWT_SECRET=huaedfASHfusauyKLCiouywjahgfidoJFciAHsUc7US : POR EJEMPLO
        - BCRYPT_ROUNDS=12
        - JWT_LIFETIME=7d
        - JWT_ALGORITHM=HS256
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



## Cómo restaurar la base de datos
Dentro de este proyecto hay una carpeta llamada `basededatos/`
Lo único necesario que debes de hacer es lo siguiente:
- Abrir `cmd`.
- Acceder a la carpeta del proyecto.
- Ejecutar el comando `mongorestore basededatos/`.

Esto lo que hará es crear una base de datos llamada `trianafy` e introducirá los datos de las siguientes colecciones:
- Songs: Contiene hasta siete canciones.
- Playlists: Contiene dos playlists distintas las cuales las poseen los distintos usuarios:
    - Billie Playlist: La posee sergiomolde.
    - Linkin' park: La posee pacoandres.
- Users: Contiene dos usuarios:
    - Sus nombres de usuario y contraseñas son:
        - sergiomolde - 12345678
        - pacoandres -  12345678
## Todas las dependencias usadas en este proyecto:
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