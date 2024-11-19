import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

const app = new Hono();

let wpm = 238;

app.use(logger());
app.use(cors());

app.get("/status", (c) => {
  return c.json({ meassage: "API is Active" });
});
app.get("/", (c) => {
  const text = c.req.query("text");
  if (!text) {
    return c.json({ message: "please provide text" }, 400);
  }
  const wordcount = text.split(/\s+/).length;
  return c.json({ count: wordcount });
});
app.post("/", async (c) => {
  const { text } = await c.req.json();
  if (!text) {
    return c.json({ message: "Please provide text" }, 400);
  }

  return c.json({ count: text.split(/\s+/).length });
});

export default app;
