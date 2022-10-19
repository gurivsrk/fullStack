import express from "express";


const indexRoute = new express.Router()

indexRoute.get('/',(req,res)=>{
    res.render('index');
})

export default indexRoute