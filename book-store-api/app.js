const express = require("express");

// init App 
const app = express();
app.use(express.json())
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
    res.send("hello Express API")
});
app.get("/api/books", (req, res) => {
    // res.json(JSON.stringify(books))
    res.status(200).json(books)
})
app.get("/api/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({
            massage: "book Not Found"
        })
    }
})
// POST Method 
app.post("/api/books", (req, res) => {
    const book = {
        id: books.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    books.push(book)
    res.status(201).json(book)
});
// PUT Method 
// app.put();
// DELETE Method 
// app.delete();

// Renning the Server 
const PORT = 5000;
app.listen(PORT, () => console.log(`PORT NUMBER Is ${PORT}`));