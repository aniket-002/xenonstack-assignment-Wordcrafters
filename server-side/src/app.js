//Imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

//settings
app.set("port", process.env.PORT || 4000);

//Middlewares
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api", authRoutes);
app.use(userRoutes);
app.use(postRoutes);

//Export
module.exports = app;
