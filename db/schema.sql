DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE table burgers (
    id int(11) Auto_Increment,
    burger_name varchar(255),
    devoured int(1) DEFAULT 0,
    primary key (id)
)
