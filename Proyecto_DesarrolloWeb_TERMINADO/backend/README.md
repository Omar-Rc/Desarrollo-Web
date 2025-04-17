# API Usuarios

Instalamos las dependencias:
```bash
npm install 
```

Ejecutamos el backend:
```bash
node app.js
```


Ejecutamos el frontend:
```bash
Iniciamos el front en con la vista "ingresar_datos.html" como un servidor en linea (click derecho y seleccionar la opcion "Open with Live Server").
Y empezamos a rellenar los datos necesarios.
Al presionar "Enviar" se pedira un usuario y contraseña para ingresar a la Tabla de administracion.
    usuario: admin
    contraseña: admin123
(Tambien  puede ver las credencias de adminstrador en la base de datos adjuntada en el backend).
El CRUD cuenta con todas sus capacidades funcionales editar y eliminar datos, estos cambios tambien se ven reflejados a la base de datos manteniendola constantemente actualizada.
```

Llamadas a la API:
```bash
Crear un registro de gasto (POST)

    URL: http://localhost:3000/gastos
    Método: POST
    Body (JSON):

    {
      "nombre": "Juan",
      "apellidos": "Perez",
      "dni": "64315278",
      "telefono": "964875163",
      "gastos_fijos": "1630",
      "gastos_formacion": "1340",
      "gastos_ocio": "640"
      
    }

Obtener todos los registros de gastos (GET)

    URL: http://localhost:3000/gastos
    Método: GET

Obtener un registro de gasto por ID (GET)

    URL: http://localhost:3000/gastos/1
    Método: GET

Actualizar un registro de gasto (PUT)

    URL: http://localhost:3000/gastos/1
    Método: PUT
    Body (JSON):

    {
      "nombre": "Juan 2",
      "apellidos": "Perez 2",
      "dni": "74185296",
      "telefono": "912345678",
      "gastos_fijos": "300",
      "gastos_formacion": "400",
      "gastos_ocio": "120"
      
    }

Eliminar un registro de gasto (DELETE)

    URL: http://localhost:3000/gastos/1
    Método: DELETE
```
