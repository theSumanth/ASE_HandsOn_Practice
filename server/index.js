const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const bodyParser = require("body-parser");

const { get404 } = require("./controllers/404");
const planRoutes = require("./routes/plan");
const { KEYS } = require("./keys");

const Plan = require("./models/plan");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/plans", planRoutes);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "An error occured";
  res.status(status).json({ message, err });
});

app.use(get404);

mongoose
  .connect(KEYS.MONGO_CONNECTION_URI)
  .then(() => {
    console.log("connected to the database");
    app.listen(KEYS.PORT, () => {
      console.log(`listening to port ${KEYS.PORT}`);
    });
  })
  .catch((err) => console.log(err));
