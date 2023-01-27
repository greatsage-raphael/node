const http = require("http")
const fs = require("fs")
const port = 4000

fs.openSync("open.txt", "w")


const server = http.createServer((request, response)=>{
    const url = request.url
    const queryString = url.split('?')[1]



    //When the server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory
    if(url.startsWith('/set?')){
        const [key,value] = queryString.split("=")

        fs.appendFileSync("open.txt", `${key}=${value}\n`)

        response.end(`key :${key} $ value: ${value}`)

        
    }

    if(url.startsWith('/get?')){
        const key = queryString.split("=")[1]
        const data = fs.readFileSync("open.txt", "utf-8")
        const lines = data.split("\n")
        let value;
        lines.forEach((line)=>{
            if(line.startsWith(key)){
                value = line.split('=')[1];
            }
        })

        response.end(` value: ${value}`)

    }


})


server.listen(port, ()=>{console.log(`Server running on ${port}`)})