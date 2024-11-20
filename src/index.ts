import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

const app = new Hono();

const defaluitWPM = 238;

app.use(logger());
app.use(cors());

function calcSpeed(text: string, wpm: number) {
  const wordCount = text.split(/\s+/).length;
  const seconds = (wordCount / wpm) * 60
  const minutes = seconds / 60;
  return {
    wpm,
    wordCount,
    seconds: Number(seconds.toFixed(2)),
    minutes: Number(minutes.toFixed(2)),
  };
}
const x = calcSpeed(
  "Lorem Ipsum is simply dummy text of t ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electhe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 238
);
console.log(x);


app.get("/status", (c) => {
  return c.json({ meassage: "API is Active" });
});
app.get("/", (c) => {
  const text = c.req.query("text");
  const wpm = c.req.query("wpm");
  if (!text) {
    return c.json({ message: "please provide text" }, 400);
  }
  const result = calcSpeed(text, wpm ? Number(wpm) : defaluitWPM);
  return c.json(result);
});
app.post("/", async (c) => {
  const { text,wpm} = await c.req.json();
  if (!text) {
    return c.json({ message: "Please provide text" }, 400);
  }
  const result = calcSpeed(text, wpm || defaluitWPM);
  console.log(result);
  

  return c.json(result);
});

export default app;
