const express = require("express")
const router = express.Router();
const joi = require("joi")



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

router.get("/", (req, res) => {
    const schema = joi.object({
        name: joi.string().trim().min(3).max(50).required(),
        price: max(10).require()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ massage: error.details })
    } else {
        res.status(200).json(books)

    }
    // res.json(JSON.stringify(books))
})
router.get("/:id", (req, res) => {
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
router.post("/", (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        return res.status(400).json("Name Is Required and must be more than char")
    }
    const book = {
        id: books.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    books.push(book)
    res.status(201).json(book)
});
// PUT Method
// router.put();
// DELETE Method
// router.delete();

// Renning the Server 



module.exports = router;