const express = require("express")
const server = express();


server.use(express.static("public"))


server.get('/', (req, res) => {
    return res.sendFile(__dirname + '/pages/index.html')
    // console.log(__dirname + "src/pages/index.html")
})


server.listen(3001, console.log("rodando"))