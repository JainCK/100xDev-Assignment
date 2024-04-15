import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://kuriakosejain456:tSbBXqe2TI5M@ep-orange-art-46456096.ap-southeast-1.aws.neon.tech/Test?sslmode=require",
});

async function createUserTable() {
  await client.connect();
  const result = await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      `);
  console.log(result);
}

createUserTable();
