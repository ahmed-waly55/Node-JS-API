const express = require("express");

// init App 
const app = express();

const books = [
    {
        id: 1,
        name: "book 1"
    },
    {
        id: 2,
        name: "book 2"
    },
    {
        id: 3,
        name: "book 3"
    },
]

// HTTP Methods / Verb 
// GET Method 
app.get("/", (req, res) => {
    res.send("hello API")
});
app.get("/api/books", (req, res) => {
    // res.json(JSON.stringify(books))
    res.json(books)
})
// POST Method 
// app.post();
// PUT Method 
// app.put();
// DELETE Method 
// app.delete();

// Renning the Server 
const PORT = 5000;
app.listen(PORT, () => console.log(`PORT NUMBER Is ${PORT}`));