# API Usuarios

Instalamos las dependencias:
```bash
npm install 
```

Ejecutamos el proyecto:

```bash
node app.js
```

Llamadas a la API:
```bash
Crear un usuario (POST)

    URL: http://localhost:3000/users
    Método: POST
    Body (JSON):

    {
      "name": "Juan Pérez",
      "email": "juan@example.com"
    }

Obtener todos los usuarios (GET)

    URL: http://localhost:3000/users
    Método: GET

Obtener un usuario por ID (GET)

    URL: http://localhost:3000/users/1
    Método: GET

Actualizar un usuario (PUT)

    URL: http://localhost:3000/users/1
    Método: PUT
    Body (JSON):

    {
      "name": "Juan Pérez Actualizado",
      "email": "juan.actualizado@example.com"
    }

Eliminar un usuario (DELETE)

    URL: http://localhost:3000/users/1
    Método: DELETE
```