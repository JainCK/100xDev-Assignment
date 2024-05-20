import { Hono } from "hono";
import {} from "../controllers/userController";
import { authMiddleware } from "../middleware/auth";

export const userRouter = new Hono();

userRouter.post("/signup", signup);
