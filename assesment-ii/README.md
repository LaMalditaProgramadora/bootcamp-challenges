## Proyecto Favs

[Heroku](https://app-assesment-ii.herokuapp.com/)

[Documentación](https://documenter.getpostman.com/view/5107072/UyrAFwyE)

### Sobre el proyecto

* Versión de Node: v16.13.1
* Dependencias:
    * @babel/plugin-transform-modules-commonjs: 7.17.9
    * axios: 0.26.1
    * bcrypt: 5.0.1
    * cors: 2.8.5
    * dotenv: 16.0.0
    * express: 4.17.2
    * jest: 27.5.1
    * jsonwebtoken: 8.5.1
    * mongoose: 6.2.0
    * nodemon: 2.0.15

### Variables de Entorno a configurar

* MONGODB_URL_AII: Ruta de la base de datos en MongoDB.
* MONGODB_URL_AII_TEST: Ruta de la base de datos de prueba en MongoDB.
* SECRET_KEY: Llave para encriptación de Token.

### Comandos disponibles

* npm run start: Ejecutar la aplicación.
* npm run server-test: Ejeuctar la aplicación en ambiente de pruebas.
* npm run test: Ejecutar los tests.

### Pruebas

![Pruebas](https://i.postimg.cc/yNwHM72C/tests.png)

## Preguntas

1. Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

    * Host: backend.mega-app.com.co
    * Port: 8080
    * Path: api/articles/search
    * Query 1: docid=1020
    * Query 2: hl=en#dayone

2. Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-

    * Web API: Application Programming Interface for the web which can be accessed using HTTP protocol.
    * Status Code 200: OK
    * Status Code 400: Bad Request
    * Status Code 500: Internal Server Error

3. When we talk about CRUD, what does it mean?
    * CRUD is an acronym for:
    * C: Create.
    * R: Read.
    * U: Update.
    * D: Delete.
    * CRUD are the basic operations that can be done with persistence.
