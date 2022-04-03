#!/bin/bash
#has to use Unix line encoding to execute properly, the commands will be visible in database log when executed
set -e

psql -v ON_ERROR_STOP=1 --username postgres --dbname postgres <<-EOSQL
    CREATE USER docker WITH ENCRYPTED PASSWORD 'docker';
    CREATE DATABASE db;
    GRANT ALL PRIVILEGES ON DATABASE db TO docker;
	\connect db
	CREATE SCHEMA data;
	\exit
EOSQL