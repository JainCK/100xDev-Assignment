import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users (username, password, name) VALUES ($1, $2, $3)";
    const values = [username, password, name];
    const res = await client.query(insertQuery, values);
    console.log("Success:", res);
  } catch (error) {
    console.error("Error orccurred", error);
  } finally {
    await client.end();
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    await client.connect();
    const selectQuery = `
    SELECT * FROM users
    WHERE userId = $1
    `;
    const values = [userId];
    const res = await client.query(selectQuery, values);
    console.log("Success:", res);
  } catch (error) {
    console.error("Error orccurred", error);
  } finally {
    await client.end();
  }
}
