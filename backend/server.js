import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Shuvkant Chaudhary");
});

// const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at https://localhost:${port}`);
});
