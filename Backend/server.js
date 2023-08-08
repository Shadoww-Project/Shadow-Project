require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;

const connectionURL = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());

// Connect to the MongoDB database using Mongoose
mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
app.use("/register", require("./routes/register"));
app.use("/authentication", require("./routes/auth"));
app.use("/admin", require("./routes/admin"));
app.use("/user", require("./routes/user"));
app.use("/specialist", require("./routes/specialist"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
