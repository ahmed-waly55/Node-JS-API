const express = require("express");
const booksPath = require("./routes/books")

// init App 
const app = express();

// Applay Middlewares 
app.use(express.json())

// Routes 
app.use("/api/books", booksPath)


const PORT = 5000;
app.listen(PORT, () => console.log(`PORT NUMBER Is ${PORT}`));