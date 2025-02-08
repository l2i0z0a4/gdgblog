const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model.js");
const authRoute = require("./routes/auth.route.js");
const userRoute = require("./routes/user.route.js");
const Blog = require("./models/blog.model.js");
const blogRoute = require("./routes/blog.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose.connect("mongodb+srv://mohamedboualit9:aggw6KsNwlIGBGFA@boualit.mnm5h.mongodb.net/?retryWrites=true&w=majority&appName=Boualit ")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
