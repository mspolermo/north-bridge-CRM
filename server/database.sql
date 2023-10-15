CREATE TABLE userRoles(
    id SERIAL PRIMARY KEY,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    role INTEGER NOT NULL,
    FOREIGN KEY (role) references userRoles(id)
);

INSERT INTO userRoles (id, role) VALUES 
    (1, 'admin'),
    (2, 'user')
;

INSERT INTO users (username, password, role) VALUES 
    (admin, 123, 1),
    (user, 123, 2)
;
