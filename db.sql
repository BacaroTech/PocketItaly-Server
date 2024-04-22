
CREATE DATABASE IF NOT EXISTS pocket_italy;
-- Create roles table with all necessary columns
CREATE TABLE IF NOT EXISTS roles 
(
    id SERIAL PRIMARY KEY,
    code VARCHAR NOT NULL,
    "name" VARCHAR
);

-- Create users table with all necessary columns and constraints
CREATE TABLE IF NOT EXISTS users 
(
    id SERIAL PRIMARY KEY,
    role_id SERIAL NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    "password" VARCHAR NOT NULL,
    telephone VARCHAR NOT NULL,
    "name" VARCHAR,
    CONSTRAINT fk_role_users FOREIGN KEY (role_id) REFERENCES roles(id)
);