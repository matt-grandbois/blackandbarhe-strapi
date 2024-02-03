const path = require('path');

module.exports = ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'), // Database connection URI
        host: env('DATABASE_HOST'), // Host address for the RDS instance
        port: env.int('DATABASE_PORT', 5432), // PostgreSQL default port is 5432
        database: env('DATABASE_NAME'), // The name of your database
        user: env('DATABASE_USERNAME'), // Database username
        password: env('DATABASE_PASSWORD'), // Database user's password, ensure to NOT hardcode and use env variables
        ssl: env.bool('DATABASE_SSL', true) ? {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false), // For AWS, you might need to set this to false
          // ca: env('DATABASE_SSL_CA'), // Only if you have a CA file for your SSL connection
        } : false,
        schema: env('DATABASE_SCHEMA', 'public'), // If you use a specific schema
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};