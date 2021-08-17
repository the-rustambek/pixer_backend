const { response } = require("express")
const express = require("express")
const fs = require("fs/promises")
const database = require("./modules/database.js")
const server = express()


const db = new database()


server.use(
    express.urlencoded({
        extended:true,
    })
);
server.use(express.json())


server.use(express.static(__dirname + "/public"))
//  tepadagi qatorda express.static public ni ichidagi hamma fayllarni ekranga chiqarib beradi.

server.get("/",async (req,res) =>{
    // res.send("Salomalaykum")
    let response = await fs.readFile(__dirname + "index.html","utf-8");
    res.send(response)

})

server.get("/todos", async (req,res)=>{
    // let x = await db.addData("uyqudan turish","323232","online")
    // console.log(x)
    let data = await db.readFile();
    // console.log(data);
    res.json({
        data:data,
    })
})


server.post("/add_todo", async (req,res) =>{
    // console.log(req.body)
    const added_todo = await db.addData(req.body.name,req.body.number,req.body,serviceType);
    res.json(added_todo)
})




server.listen(3030, () =>{
    console.log("Server is running at 3030 PORT")
})
