import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Shuvkant Chaudhary Phanait");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "first jokes", content: "This is first joke" },
    { id: 2, title: "second jokes", content: "This is second joke" },
    { id: 3, title: "third joke", content: "This is third joke" },
    { id: 4, title: "fourth joke", content: "this is fourth joke" },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at https://localhost:${port}`);
});
