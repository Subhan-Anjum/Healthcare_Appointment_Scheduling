const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoute");
require("./utils/db");
const cors = require("cors");
port = 3005;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("User CRUD API");
});

app.listen(port, () => {
  console.log(`Server is runing at port:${port}`);
});
