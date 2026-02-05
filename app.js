const http = require("http");


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
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("<h1>Welcome To Node JS</h1>")
        res.end();
    }
    if (req.url === "/api/books") {
        res.write(JSON.stringify(books));
        res.end()

    }
})

server.listen(5000, () => console.log("server is running "))