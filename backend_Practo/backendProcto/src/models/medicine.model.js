const mongoose=require("mongoose");

const medicineSchema= new mongoose.Schema({
    name:{type:String, required:true},
    actualPrice:{type:Number, required:true},
    discount:{type:Number, required:true, default:0},
    unitCount:{type:String, required:true},
    packSize:{type:String, required:true},
    Manufacturer:{type:String, required:true},
    Heighlights:{type:String,required:true},
    Description:{type:String, required:true},
    ImageURL:{type:String, required:true},
    categories:{type:String, required:true}    
},
{
    versionKey:false,
    timestamps:true
});

const Medecine=mongoose.model("Medecine",medicineSchema);

module.exports=Medecine;
