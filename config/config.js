
import 'dotenv/config';
import mysql2 from "mysql2";
import Sequelize from "sequelize";
const requiredVars = ['DATABASE_USER', 'DATABASE_PASSWORD', 'DATABASE_NAME', 'DATABASE_HOST', 'DATABASE_PORT'];
requiredVars.forEach(v => {
  if (!process.env[v]) {
    console.warn(`Warning: Environment variable ${v} is not set.`);
  }
});

const config = {
  development: {
    username: process.env.DATABASE_USER || 'admin', // Default fallback can be useful
    password: process.env.DATABASE_PASSWORD || 'admin',
    database: process.env.DATABASE_NAME || 'ejercicio_api_sequelize',
    host: process.env.DATABASE_HOST || 'db', 
    port: process.env.DATABASE_PORT || 3306,
    
    dialect: 'mysql',
    dialectModule: mysql2,
    
  },
  
};

export const sequelize = new Sequelize(config.development)