CREATE TABLE node_users_db;
USE node_users_db;
CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR (100) NOT NULL,
    last_names VARCHAR (100) NOT NULL,
    identification VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    phone INT(11) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE user to users;
DESCRIBE user;