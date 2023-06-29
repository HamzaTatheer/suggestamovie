require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
  },
  production: {
    client: 'mysql',
    connection: {
        host: process.env.RDS_HOSTNAME,
        port:  process.env.RDS_PORT,
        user:  process.env.RDS_HOSTNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB_NAME
    },
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
  }
};