import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();              // get the environment variables (.env)
const { Pool } = pg; 

// create a connection pool
const pool = new Pool({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// test the connection
pool.connect((err, client, release) => { 
    if (err) { 
       return console.error('Error acquiring client', err.stack); 
    } 
    console.log('Connected to PostgreSQL database'); 
    release();
});

// export the pool for use in other modules
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });
  
  // make variables available for importing from other files
  export const query = (text, params) => pool.query(text, params);
  export default pool;
  