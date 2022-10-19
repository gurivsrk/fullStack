import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import indexRoute from '../routes/indexRoute.js'
import mongoose from 'mongoose';

const app = express()

app.use(express.static(path.join(process.cwd(),'/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(),'resources/views'))

app.use(expressLayouts)
app.set('layout', path.join(process.cwd(),'resources/layouts/guestLayout'))

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error) )
db.once('open', ()=>console.log('connect to DB'))

app.use(indexRoute)


app.listen(process.env.PORT,()=>{
    console.log(`server is up at port: http://127.0.0.1:${process.env.port}`)
})
