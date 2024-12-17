
const express=require('express')

const app=express()

app.get('/',(request,response)=>
{
    response.send("welcome to my side 1.0")
})

app.listen(7878,'0.0.0.0',()=>
{
    console.log("server listen on port 7878")
}
)