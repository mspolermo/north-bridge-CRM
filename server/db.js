import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    password: "Ms123456",
    host: "localhost",
    port: 5432,
    database: "north_bridge"
})

export default pool;