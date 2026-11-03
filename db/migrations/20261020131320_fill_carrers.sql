-- migrate:up
INSERT INTO carrers (name) VALUES
('Ingeniería de Sistemas'),
('Ingeniería de Software'),
('Administración de Empresas'),
('Contabilidad y Finanzas'),
('Derecho'),
('Medicina Humana'),
('Psicología'),
('Arquitectura'),
('Ingeniería Industrial'),
('Marketing');
-- migrate:downs

/*
SELECT setval(
    pg_get_serial_sequence('carrers', 'id'),
    (SELECT MAX(id) FROM carrers)
);
*/

delete from carrers;