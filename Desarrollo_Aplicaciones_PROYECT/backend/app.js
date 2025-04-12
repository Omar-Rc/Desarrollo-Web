const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Crear una aplicación Express
const app = express();
app.use(express.json()); // Para parsear cuerpos JSON
app.use(cors()); // Soporte para cors

// Configurar la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // Cambia esto según tu configuración
  password: '123456',     // Cambia esto si tienes contraseña
  database: 'db_gastos'
});

// Conectar a la base de datos MySQL
db.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para crear un nuevo registro de gastos
app.post('/gastos', (req, res) => {
  const { nombre, telefono, gastos_fijos, gastos_formacion, gastos_ocio } = req.body;
  const query = 'INSERT INTO listado_gastos (nombre, telefono, gastos_fijos, gastos_formacion, gastos_ocio) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nombre, telefono, gastos_fijos, gastos_formacion, gastos_ocio], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al crear registro de gastos' });
    }
    res.status(201).json({ 
      id: result.insertId, 
      nombre, 
      telefono, 
      gastos_fijos, 
      gastos_formacion, 
      gastos_ocio 
    });
  });
});

// Ruta para obtener todos los registros de gastos
app.get('/gastos', (req, res) => {
  const query = 'SELECT * FROM listado_gastos';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener registros de gastos' });
    }
    res.status(200).json(results);
  });
});

// Ruta para obtener un registro de gastos por su ID
app.get('/gastos/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM listado_gastos WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener el registro de gastos' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.status(200).json(results[0]);
  });
});

// Ruta para actualizar un registro de gastos
app.put('/gastos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, gastos_fijos, gastos_formacion, gastos_ocio } = req.body;
  const query = 'UPDATE listado_gastos SET nombre = ?, telefono = ?, gastos_fijos = ?, gastos_formacion = ?, gastos_ocio = ? WHERE id = ?';
  db.query(query, [nombre, telefono, gastos_fijos, gastos_formacion, gastos_ocio, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al actualizar registro de gastos' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.status(200).json({ 
      id, 
      nombre, 
      telefono, 
      gastos_fijos, 
      gastos_formacion, 
      gastos_ocio 
    });
  });
});

// Ruta para eliminar un registro de gastos
app.delete('/gastos/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM listado_gastos WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al eliminar registro de gastos' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
    res.status(200).json({ message: 'Registro de gastos eliminado con éxito' });
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});