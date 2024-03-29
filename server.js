const express = require("express");
const dotenv = require("dotenv").config();
const erroHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(erroHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
