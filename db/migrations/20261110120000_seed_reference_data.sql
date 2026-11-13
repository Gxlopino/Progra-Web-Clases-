-- migrate:up

INSERT INTO districts (name) VALUES
('Santiago de Surco'),
('Miraflores'),
('San Isidro'),
('La Molina'),
('San Borja');

INSERT INTO semesters (name) VALUES
('2025-2'),
('2026-0'),
('2026-1'),
('2026-2');

INSERT INTO users (email, password, reset_token, created, updated) VALUES
('juan.perez@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('maria.gomez@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('carlos.lopez@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('ana.torres@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('luis.ramirez@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('sofia.diaz@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('diego.mendoza@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('lucia.morales@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('javier.castro@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('elena.romero@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('contacto@techsolutions.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('hr@innovatech.io', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('reclutamiento@globaldev.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('empleos@datasystems.pe', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('talento@softworks.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('pedro.vargas@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('camila.flores@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('mateo.benitez@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('valeria.silva@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('gabriel.rojas@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('daniela.reyes@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('fernando.herrera@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('paula.guerrero@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('andres.medina@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('carolina.vega@example.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('contacto@cloudservices.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('jobs@cybersec.io', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('rrhh@futuretech.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('admin@portalempleo.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW()),
('soporte@portalempleo.com', '$2b$10$e8T/k9w4g8A2s1D3f4G5h.H6j7K8l9M0n1O2P3Q4R5S6T7U8V9W0X', NULL, NOW(), NOW());

INSERT INTO profiles (name, user_id, created, updated)
SELECT 'Administrador', u.id, NOW(), NOW() FROM users u WHERE u.email = 'juan.perez@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'maria.gomez@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'carlos.lopez@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'ana.torres@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'luis.ramirez@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'sofia.diaz@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'diego.mendoza@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'lucia.morales@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'javier.castro@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'elena.romero@example.com'
UNION ALL
SELECT 'Empresa', u.id, NOW(), NOW() FROM users u WHERE u.email = 'contacto@techsolutions.com'
UNION ALL
SELECT 'Empresa', u.id, NOW(), NOW() FROM users u WHERE u.email = 'hr@innovatech.io'
UNION ALL
SELECT 'Empresa', u.id, NOW(), NOW() FROM users u WHERE u.email = 'reclutamiento@globaldev.com'
UNION ALL
SELECT 'Empresa', u.id, NOW(), NOW() FROM users u WHERE u.email = 'empleos@datasystems.pe'
UNION ALL
SELECT 'Empresa', u.id, NOW(), NOW() FROM users u WHERE u.email = 'talento@softworks.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'pedro.vargas@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'camila.flores@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'mateo.benitez@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'valeria.silva@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'gabriel.rojas@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'daniela.reyes@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'fernando.herrera@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'paula.guerrero@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'andres.medina@example.com'
UNION ALL
SELECT 'Estudiante', u.id, NOW(), NOW() FROM users u WHERE u.email = 'carolina.vega@example.com'
UNION ALL
SELECT 'Empresa', u.id, NOW(), NOW() FROM users u WHERE u.email = 'contacto@cloudservices.com'
UNION ALL
SELECT 'Empresa', u.id, NOW(), NOW() FROM users u WHERE u.email = 'jobs@cybersec.io'
UNION ALL
SELECT 'Empresa', u.id, NOW(), NOW() FROM users u WHERE u.email = 'rrhh@futuretech.com'
UNION ALL
SELECT 'Administrador', u.id, NOW(), NOW() FROM users u WHERE u.email = 'admin@portalempleo.com'
UNION ALL
SELECT 'Administrador', u.id, NOW(), NOW() FROM users u WHERE u.email = 'soporte@portalempleo.com';

INSERT INTO students (names, last_names, email, phone, district_id, picture_url, summary, carrere_id, sementer_id, user_id, created, updated)
SELECT 'María', 'Gómez', 'maria.gomez@example.com', '987654321', d.id, NULL, 'Estudiante de Software enfocada en desarrollo Web.', 1, s.id, u.id, NOW(), NOW()
FROM users u
JOIN districts d ON d.name = 'Santiago de Surco'
JOIN semesters s ON s.name = '2026-1'
WHERE u.email = 'maria.gomez@example.com'
UNION ALL
SELECT 'Carlos', 'López', 'carlos.lopez@example.com', '987654322', (SELECT id FROM districts WHERE name = 'Miraflores'), NULL, 'Apasionado por la inteligencia artificial y ciencia de datos.', 1, (SELECT id FROM semesters WHERE name = '2026-2'), (SELECT id FROM users WHERE email = 'carlos.lopez@example.com'), NOW(), NOW()
UNION ALL
SELECT 'Ana', 'Torres', 'ana.torres@example.com', '987654323', (SELECT id FROM districts WHERE name = 'San Isidro'), NULL, 'Diseñadora UI/UX en formación con interés en desarrollo frontend.', 2, (SELECT id FROM semesters WHERE name = '2026-1'), (SELECT id FROM users WHERE email = 'ana.torres@example.com'), NOW(), NOW()
UNION ALL
SELECT 'Luis', 'Ramírez', 'luis.ramirez@example.com', '987654324', (SELECT id FROM districts WHERE name = 'La Molina'), NULL, 'Desarrollador backend orientado a microservicios en Node.js.', 1, (SELECT id FROM semesters WHERE name = '2026-0'), (SELECT id FROM users WHERE email = 'luis.ramirez@example.com'), NOW(), NOW()
UNION ALL
SELECT 'Sofía', 'Díaz', 'sofia.diaz@example.com', '987654325', (SELECT id FROM districts WHERE name = 'San Borja'), NULL, 'Interesada en gestión de proyectos y análisis de sistemas.', 3, (SELECT id FROM semesters WHERE name = '2026-2'), (SELECT id FROM users WHERE email = 'sofia.diaz@example.com'), NOW(), NOW()
UNION ALL
SELECT 'Diego', 'Mendoza', 'diego.mendoza@example.com', '987654326', (SELECT id FROM districts WHERE name = 'Santiago de Surco'), NULL, 'Estudiante enfocado en bases de datos PostgreSQL y Sequelize.', 1, (SELECT id FROM semesters WHERE name = '2025-2'), (SELECT id FROM users WHERE email = 'diego.mendoza@example.com'), NOW(), NOW()
UNION ALL
SELECT 'Lucía', 'Morales', 'lucia.morales@example.com', '987654327', (SELECT id FROM districts WHERE name = 'Miraflores'), NULL, 'Entusiasta del desarrollo móvil con Flutter y React Native.', 1, (SELECT id FROM semesters WHERE name = '2026-1'), (SELECT id FROM users WHERE email = 'lucia.morales@example.com'), NOW(), NOW()
UNION ALL
SELECT 'Javier', 'Castro', 'javier.castro@example.com', '987654328', (SELECT id FROM districts WHERE name = 'San Isidro'), NULL, 'Apasionado por la ciberseguridad y redes computacionales.', 4, (SELECT id FROM semesters WHERE name = '2026-2'), (SELECT id FROM users WHERE email = 'javier.castro@example.com'), NOW(), NOW()
UNION ALL
SELECT 'Elena', 'Romero', 'elena.romero@example.com', '987654329', (SELECT id FROM districts WHERE name = 'La Molina'), NULL, 'Especialista en desarrollo frontend con React y CSS avanzado.', 2, (SELECT id FROM semesters WHERE name = '2026-0'), (SELECT id FROM users WHERE email = 'elena.romero@example.com'), NOW(), NOW();

-- migrate:down

DELETE FROM students;
DELETE FROM profiles;
DELETE FROM users;
DELETE FROM semesters;
DELETE FROM districts;
