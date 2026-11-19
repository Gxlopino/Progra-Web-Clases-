-- migrate:up
INSERT INTO amigos (name, apellido, celular) VALUES
    ('Alain', 'Choy', '987654321'),
    ('Mariana', 'Chienda', '912345678'),
    ('Natalia', 'Morales', '956789123'),
    ('Ian', 'Cavero', '923456789'),
    ('Erika', 'Hori', '978123456');

-- migrate:down

delete from amigos;