const { response } = require("express")
const express = require("express")
const fs = require("fs/promises")
const server = express()

server.use(express.static(__dirname + "/public"))
//  tepadagi qatorda express.static public ni ichidagi hamma fayllarni ekranga chiqarib beradi.

server.get("/",async (req,res) =>{
    // res.send("Salomalaykum")
    let response = await fs.readFile(__dirname + "/views/index.html","utf-8");
    res.send(response)

})


server.listen(3030, () =>{
    console.log("Server is running at 3030 PORT")
})
