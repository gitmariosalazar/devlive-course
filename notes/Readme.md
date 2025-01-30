## Configure Database
Create the database with the following tables and your attributes

```sql
CREATE TABLE product (
    id_product INT AUTO_INCREMENT PRIMARY KEY, -- Use SERIAL to create in PostgreSQL.
    code VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(255),
    iva NUMERIC(10,2) NOT NULL,
    mark VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    percentage_increment NUMERIC(10,2) NOT NULL,
    public_price NUMERIC(10,2),
    quantity INT NOT NULL,
    supplier_price NUMERIC(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id_user INT AUTO_INCREMENT PRIMARY KEY, -- Use SERIAL to create in PostgreSQL.
    address VARCHAR(100) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    firstname VARCHAR(100) NOT NULL,
    identification VARCHAR(13) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    password TEXT NOT NULL,
    phone VARCHAR(15) NOT NULL,
    token TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

```

# Environment Variables Configuration

This document explains the purpose of each environment variable used in the application. These variables ensure proper configuration and connection to external services and databases.

## General Variables

- **PORT**: Specifies the port on which the application will run.
    
- **SECRET_KEY**: A secret key used for token generation and application security.
    
- **PERCENTAGE_INCREMENT**: Represents a percentage value for specific application logic.
    

## Database Variables

### MongoDB

- **MONGODB_URI**: Connection string to connect to a MongoDB database cluster.
    

### PostgreSQL

- **DB_USERNAME**: The username for the PostgreSQL database.
    
- **DB_PASSWORD**: The password for the PostgreSQL database.
    
- **DB_DATABASE**: The name of the PostgreSQL database.
    
- **DB_HOSTNAME**: The hostname for the PostgreSQL database server.
    
- **DB_PORT**: The port for the PostgreSQL database server.
    

### MySQL

- **MYSQL_HOSTNAME**: The hostname for the MySQL database server.
    
- **MYSQL_PORT**: The port for the MySQL database server.
    
- **MYSQL_DATABASE**: The name of the MySQL database.
    
- **MYSQL_USERNAME**: The username for the MySQL database.
    
- **MYSQL_PASSWORD**: The password for the MySQL database.
    

### SQL Server

- **SQLSERVER_HOSTNAME**: The hostname for the SQL Server database.
    
- **SQLSERVER_PORT**: The port for the SQL Server database.
    
- **SQLSERVER_DATABASE**: The name of the SQL Server database.
    
- **SQLSERVER_USERNAME**: The username for the SQL Server database.
    
- **SQLSERVER_PASSWORD**: The password for the SQL Server database.
    

### Prisma-Specific

- **DATABASE_URL**: Connection string for Prisma, supporting PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, or CockroachDB. It is used by Prisma to interact with the database. Refer to the Prisma documentation for more details:
    
    - [Accessing environment variables](https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema)
        
    - [Connection string options](https://pris.ly/d/connection-strings)

This project is configured to support the following database connections:

- **Products Module**  
    The products module supports multiple database solutions:
    - **PostgreSQL** using the `pg` library
    - **SQL Server** using the `mssql` library
    - **MySQL** using the `mysql2` library
    - **MongoDB** using `mongoose`
    - **TypeORM** for Object Relational Mapping (ORM)
    - **Prisma** as a modern ORM for database access
- **Users Module**  
    The users module is implemented using **Prisma** for database management.