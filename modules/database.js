const fs = require("fs/promises")
const path = require("path")

module.exports = class Database {
    constructor() {
        this.filePath = path.join(__dirname, "..", "database.json");
        this.data = []
        this.readFile()
    }
    async readFile() {
        // console.log(this.filePath)
        let data = await fs.readFile(this.filePath, "utf-8")
        // console.log(data);
        data = await JSON.parse(data)
        // console.log(data);
        // console.log(data.data);
        this.data = data.data;
        return data.data;
    }
    
    async addData(name,number,serviceType){
       const data = {
        id:( this.data.length - 1) +1,
        name: name,
        number:number,
        serviceType:serviceType
       }
       
        this.data.push(data)
       await fs.writeFile(
           this.filePath,
           JSON.stringify({
               data: this.data,
           }));
           return data
    }



}