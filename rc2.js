const http = require("http")
const fs = require("fs")
const port = 6000

fs.open("new.txt", "w", (err)=>{
    if(err){
    console.error(err)
    }
})


const server = http.createServer((request, response)=>{

    const url = request.url
    const queryString = url.split("?")[1]

    if(url.startsWith('/set?')){
        const [key,value] = queryString.split("=")

        fs.appendFile("open.txt", `${key}=${value}\n`, (err)=>{
            if(err){
            console.error(err)
            }
        })

        response.end(`key :${key} $ value: ${value}`)

        
    }



})

server.listen(port, ()=>console.log(`server listening at port ${port}`))