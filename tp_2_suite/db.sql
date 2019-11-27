/* database creation */
CREATE DATABASE weather_station_db;

/* selection the database */
use weather_station_db;

/* creating table stucture */
CREATE TABLE IF NOT EXISTS weather_data (
    station_name varchar(30),
    temperature  INT,
    humidity     INT,
    latitude     DOUBLE,
    longitude    DOUBLE,
    full_time    BIGINT,      
    PRIMARY KEY (station_name, full_time)
); 