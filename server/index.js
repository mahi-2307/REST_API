const express = require("express");
const app = express();
const connectDb = require("./db/connect");
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/products", require("./routes/products"));
const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {}
};
start();
