-- migrate:up

INSERT INTO amigos2
    (name, apellido, celular, email, birth_date, picture_url, description, user_id)
SELECT
    seed.name,
    seed.apellido,
    seed.celular,
    seed.email,
    seed.birth_date,
    seed.picture_url,
    seed.description,
    u.id
FROM (
    VALUES
        ('Alain', 'Choy', '987654321', 'juan.perez@example.com', DATE '1998-03-15', NULL, 'Amigo cercano del grupo'),
        ('Mariana', 'Chienda', '912345678', 'maria.gomez@example.com', DATE '1999-07-22', NULL, 'Le gusta la programación web'),
        ('Natalia', 'Morales', '956789123', 'carlos.lopez@example.com', DATE '2000-01-10', NULL, 'Especialista en diseño'),
        ('Ian', 'Cavero', '923456789', 'ana.torres@example.com', DATE '1997-11-05', NULL, 'Interesado en desarrollo backend'),
        ('Erika', 'Hori', '978123456', 'luis.ramirez@example.com', DATE '1998-09-18', NULL, 'Amiga y compañera de clases')
) AS seed(name, apellido, celular, email, birth_date, picture_url, description)
JOIN users u ON u.email = seed.email
ON CONFLICT (user_id) DO UPDATE SET
    name = EXCLUDED.name,
    apellido = EXCLUDED.apellido,
    celular = EXCLUDED.celular,
    email = EXCLUDED.email,
    birth_date = EXCLUDED.birth_date,
    picture_url = EXCLUDED.picture_url,
    description = EXCLUDED.description;

-- migrate:down

DELETE FROM amigos2;
