# 💰 Calculadora de Gastos

## 👥 Integrantes

- **Andres Cueva Lopez**
- **Steven Santos Bejarano**
- **Omar Rios Campos**

## 📝 Descripción

Este proyecto consiste en una página web capaz de calcular los gastos mensuales de una persona promedio. El usuario deberá completar ciertos campos generales relacionados con sus gastos.  
Además, la aplicación cuenta con un área de administración donde se almacena un historial de cálculos. Para acceder a esta sección, se requiere iniciar sesión. Desde allí es posible modificar o eliminar datos del historial con fines administrativos o de corrección.

## ⚙️ Funcionamiento

### Backend

Para ejecutar el backend, usa el siguiente comando:

```bash
node app.js
```

### Frontend

1. Abre el archivo `ingresar_datos.html` utilizando la extensión **Live Server** de tu editor (haz clic derecho sobre el archivo y selecciona "Open with Live Server").
2. Rellena los datos solicitados.
3. Presiona el botón **Enviar**.
4. Se solicitará un **usuario** y **contraseña** para acceder a la **Tabla de Administración**:

   - **Usuario:** `admin`  
   - **Contraseña:** `admin123`
   *(La base de datos se encuentra en la carpeta "sql" dentro del backend).
   *(También puedes revisar las credenciales en la base de datos adjunta al backend).*

5. El área de administración implementa un sistema **CRUD** completo: permite **crear, leer, actualizar y eliminar** datos.  
   Cualquier cambio se refleja directamente en la base de datos, manteniéndola siempre actualizada.

## 🔐 Credenciales de Administración

- **Usuario:** `admin`  
- **Contraseña:** `admin123`

## 🧑‍💻 Aportes

| Integrante       | Porcentaje | Aportes Principales |
|------------------|------------|----------------------|
| **Omar Rios**    | 40%        | - Encargado del repositorio Git<br>- Participación activa en el backend |
| **Andres Cueva** | 30%        | - Encargado del frontend<br>- Implementación del login conectado a base de datos |
| **Steven Santos**| 30%        | - Diseño y planificación del proyecto<br>- Creación de la base de datos<br>- Asignación de tareas |
