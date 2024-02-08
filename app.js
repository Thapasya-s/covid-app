const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const patientRouter=require("./controllers/patientRouter")
const app=express()


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://thapasya:9846@cluster0.w7irtzy.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/patient",patientRouter)


app.listen(3002,()=>{
    console.log("Server Running")
})