const express=require("express");
const app=express();

const medicineController=require("./controllers/medicine.controller")
app.use(express.json());
app.use("/medecine", medicineController);

module.exports=app;