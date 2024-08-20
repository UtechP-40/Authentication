const express= require("express")
const app = express()


app.length('/',(req,res)=>{
    res.render('index.js')
})

app.listen(3000)