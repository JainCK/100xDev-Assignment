import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
  const users = await prisma.user.create({
    data: {
      username,
      password,
      name,
    },
  });
  console.log(users);
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
  const res: object | null = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  console.log(res);
}
