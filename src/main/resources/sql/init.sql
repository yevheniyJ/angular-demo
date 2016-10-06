CREATE DATABASE `angular_demo`
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;
USE angular_demo;

CREATE TABLE IF NOT EXISTS event (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(30)  NULL,
  date        VARCHAR(30)  NULL,
  time        VARCHAR(30)  NULL,
  address     VARCHAR(30)  NULL,
  city        VARCHAR(30)  NULL,
  image_url   VARCHAR(100) NULL,
  description VARCHAR(100) NULL
);