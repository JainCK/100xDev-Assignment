import { client } from "../index";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string,
  done: boolean
) {
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO todos (userId, title, description, done) VALUES ($1, $2, $3, $4)";
    const values = [userId, title, description, done];
    const res = await client.query(insertQuery, values);
    console.log("Success:", res);
  } catch (error) {
    console.error("Error orccurred", error);
  } finally {
    await client.end();
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    await client.connect();
    const updateQuery = `
    UPDATE todos SET done = true
    WHERE todoId = $1
    RETURNING *;
    `;
    const values = [todoId];
    const res = await client.query(updateQuery, values);
    console.log("Success:", res);
  } catch (error) {
    console.error("Error orccurred", error);
  } finally {
    await client.end();
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    await client.connect();
    const selectQuery = `
    SELECT * FROM todos
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
