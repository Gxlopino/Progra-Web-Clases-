-- migrate:up

CREATE TABLE IF NOT EXISTS amigos2 (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    celular VARCHAR(15),
    email VARCHAR(45),
    birth_date DATE,
    picture_url VARCHAR(100),
    description TEXT,
    user_id INT UNIQUE REFERENCES users(id) ON DELETE SET NULL
);

-- migrate:down

DROP TABLE IF EXISTS amigos2 CASCADE;
