-- migrate:up

CREATE TABLE carrers (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    reset_token VARCHAR(100),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE skill_levels (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE status_applications_students (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE semesters (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE workdays (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(40) NOT NULL
);

CREATE TABLE modalities (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(40) NOT NULL
);

CREATE TABLE districts (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(40) NOT NULL
);

CREATE TABLE logs (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    description VARCHAR(100),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profiles (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enterprises (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    ruc VARCHAR(11),
    email VARCHAR(45),
    phone VARCHAR(15),
    website_url VARCHAR(100),
    description TEXT,
    address VARCHAR(100),
    picture_url VARCHAR(100),
    district_id INT REFERENCES districts(id) ON DELETE SET NULL,
    sector_id INT, -- Referencia opcional (entidad no definida en diagrama)
    size_id INT,   -- Referencia opcional (entidad no definida en diagrama)
    user_id INT REFERENCES users(id) ON DELETE SET NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    names VARCHAR(45) NOT NULL,
    last_names VARCHAR(100) NOT NULL,
    email VARCHAR(45),
    phone VARCHAR(15),
    district_id INT REFERENCES districts(id) ON DELETE SET NULL,
    picture_url VARCHAR(100),
    summary TEXT,
    carrere_id INT REFERENCES carrers(id) ON DELETE SET NULL,
    sementer_id INT REFERENCES semesters(id) ON DELETE SET NULL,
    user_id INT UNIQUE REFERENCES users(id) ON DELETE SET NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE experiences (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    enterprise VARCHAR(60),
    description TEXT,
    start_date DATE,
    end_date DATE,
    student_id INT REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE links (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    url VARCHAR(100) NOT NULL,
    student_id INT REFERENCES students(id) ON DELETE CASCADE
);

CREATE TABLE applications (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    description TEXT,
    benefits TEXT,
    functions TEXT,
    vacancies INT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    published TIMESTAMP,
    email_notification BOOLEAN DEFAULT FALSE,
    closed TIMESTAMP,
    salarry NUMERIC(10,2),
    is_draft BOOLEAN DEFAULT TRUE,
    modality_id INT REFERENCES modalities(id) ON DELETE SET NULL,
    sementer_id INT REFERENCES semesters(id) ON DELETE SET NULL,
    district_id INT REFERENCES districts(id) ON DELETE SET NULL,
    workday_id INT REFERENCES workdays(id) ON DELETE SET NULL,
    enterprise_id INT REFERENCES enterprises(id) ON DELETE CASCADE
);

CREATE TABLE students_skills_skill_levels (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    skill_id INT REFERENCES skills(id) ON DELETE CASCADE,
    skill_level_id INT REFERENCES skill_levels(id) ON DELETE SET NULL
);

CREATE TABLE applications_students (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    application_id INT REFERENCES applications(id) ON DELETE CASCADE,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    status_applications_student_id INT REFERENCES status_applications_students(id) ON DELETE SET NULL,
    notes TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students_applications_saved (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created DATE DEFAULT CURRENT_DATE,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    application_id INT REFERENCES applications(id) ON DELETE CASCADE
);

CREATE TABLE applications_skills (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    application_id INT REFERENCES applications(id) ON DELETE CASCADE,
    skill_id INT REFERENCES skills(id) ON DELETE CASCADE
);

CREATE TABLE applications_carrers (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    application_id INT REFERENCES applications(id) ON DELETE CASCADE,
    carrer_id INT REFERENCES carrers(id) ON DELETE CASCADE
);

CREATE TABLE applications_students_reviews (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    applications_student_id INT REFERENCES applications_students(id) ON DELETE CASCADE,
    points INT,
    enviroment INT,
    learning INT,
    work_load INT,
    title VARCHAR(50),
    comment TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    start TIMESTAMP,
    end_date TIMESTAMP,
    anonimous BOOLEAN DEFAULT FALSE
);


-- migrate:down

DROP TABLE IF EXISTS applications_students_reviews CASCADE;

DROP TABLE IF EXISTS applications_carrers CASCADE;
DROP TABLE IF EXISTS applications_skills CASCADE;
DROP TABLE IF EXISTS students_applications_saved CASCADE;
DROP TABLE IF EXISTS applications_students CASCADE;
DROP TABLE IF EXISTS students_skills_skill_levels CASCADE;

DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS links CASCADE;
DROP TABLE IF EXISTS experiences CASCADE;

DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS enterprises CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;
DROP TABLE IF EXISTS logs CASCADE;

DROP TABLE IF EXISTS districts CASCADE;
DROP TABLE IF EXISTS modalities CASCADE;
DROP TABLE IF EXISTS workdays CASCADE;
DROP TABLE IF EXISTS semesters CASCADE;
DROP TABLE IF EXISTS status_applications_students CASCADE;
DROP TABLE IF EXISTS skill_levels CASCADE;
DROP TABLE IF EXISTS skills CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS carrers CASCADE;