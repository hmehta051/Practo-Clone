const express=require("express");
const router=express.Router();

const Medecine=require("../models/medicine.model")

router.get("",async(req,res)=>{
    try{
        let medecine=await Medecine.find().lean().exec();
        return res.status(200).send(medecine);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
    try{
        let medecine=await Medecine.create(req.body);
        return res.status(201).send(medecine);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

module.exports=router