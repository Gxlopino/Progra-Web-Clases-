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
-- migrate:down

delete from carrers;