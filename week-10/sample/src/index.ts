import { Client } from "pg";

async function insertData() {
  const client = new Client({
    connectionString:
  });

  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
  } catch (error) {}
}
