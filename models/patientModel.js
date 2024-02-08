const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema({
    patientname:String,
    patientphone:String,
    patientaddress:String,
    patientsymptoms:String,
    patientstatus:String
})
module.exports=mongoose.model("patient_entry",patientSchema)