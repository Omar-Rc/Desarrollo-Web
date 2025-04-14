CREATE DATABASE IF NOT EXISTS `db_gastos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `db_gastos`;

-- Estructura para tabla listado_gastos
CREATE TABLE IF NOT EXISTS `listado_gastos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `gastos_fijos` decimal(10,2) NOT NULL DEFAULT 0.00,
  `gastos_formacion` decimal(10,2) NOT NULL DEFAULT 0.00,
  `gastos_ocio` decimal(10,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

select * from listado_gastos;
select * from usuarios;

INSERT INTO usuarios (username, password) VALUES ('admin', 'admin123');
INSERT INTO `listado_gastos` 
(`nombre`, `apellidos`, `dni`, `telefono`, `gastos_fijos`, `gastos_formacion`, `gastos_ocio`) 
VALUES 
('María', 'García Rodríguez', '87654321', '912345678', 1100.00, 850.00, 400.00);