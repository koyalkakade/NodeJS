const express =require('express')
const travelRoute=require('./routes/travelRoute')
const app=express()

const port=5003
app.use(express.json());//middleware most important
app.get('/',(req,res)=>{
    res.send("server is started")
})

app.use('/travel',travelRoute)

app.listen(port,()=>{
    console.log(`server running on http:localhost:${port}`)
})