import express from "express";
import cors from "cors"

const app = express();

app.use(cors())


app.get("/", (req, res) => {
  res.send("Shuvkant Implemented Cors ");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "first jokes", content: "Why don’t skeletons fight each other? They don’t have the guts" },
    { id: 2, title: "second joke", content: "I’m reading a book about anti-gravity. It’s impossible to put down" },
    { id: 3, title: "third joke", content: "Parallel lines have so much in common. It’s a shame they’ll never meet" },
    { id: 4, title: "fourth joke", content: "I told my computer I needed a break. Now it won’t stop sending me KitKats." },
    { id: 5, title: "third joke", content: "Why don’t scientists trust atoms? Because they make up everything." }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at https://localhost:${port}`);
});
