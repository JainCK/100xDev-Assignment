import { Next } from "hono";
import { env } from "hono/adapter";
import { Jwt } from "hono/utils/jwt";

export async function authMiddleware(c: any, next: Next) {
  const JWT_TOKEN = "mytoken";

  try {
    const token: string = c.req.header("Authorization").split(" ")[1];
    if (token !== null || token !== undefined) {
      const decode = await Jwt.verify(token, JWT_TOKEN);
      if (decode) {
        c.set("userId", decode);
        await next();
      } else {
        return c.body(" you are unauth, shoo shooo go away", 401);
      }
    } else {
      return c.body(" you are unauth, shoo shooo go away", 401);
    }
  } catch (error) {
    return c.body("unauth", 401);
  }
}
