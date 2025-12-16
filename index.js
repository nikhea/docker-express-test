const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.json([
    {
      name: "fortube",
      email: "fortube@gmail.com",
    },
    {
      name: "gebmin",
      email: "fortube@gmail.com",
    },
    {
      name: "gebmin",
      email: "fortube@gmail.com",
    },
    {
      name: "gebmin",
      email: "fortube@gmail.comnxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
