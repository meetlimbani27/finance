import { Hono } from "hono";
import { handle } from "hono/vercel";
import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;

// .get(
//   '/hello/:test',
//    (c) => {
//     return c.json({
//       message: 'Hello Worldd!',
//     })
// })
// .post(
//   "/create/:postId",
//   zValidator("json", z.object({
//     name: z.string(),
//     userId: z.string(),
//   })),
//   zValidator("param", z.object({
//     postId: z.number(),
//   })),
//   (c) => {
//     const { name, userId } = c.req.valid("json");
//     const { postId } = c.req.valid("param");

//     return c.json({});
//   }
// )
