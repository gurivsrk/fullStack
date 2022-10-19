import express from "express";
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import indexRoute from '../routes/indexRoute.js'
import mongoose from 'mongoose';

const PORT = process.env.port??'4500'
const DB_URL = process.env.DATABASE_URL??'mongodb://localhost:27017'
const app = express()

app.use(express.static(path.join(process.cwd(),'/public')))

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(),'resources/views'))

app.use(expressLayouts)
app.set('layout', path.join(process.cwd(),'resources/layouts/guestLayout'))

mongoose.connect(DB_URL)
const db = mongoose.connection
db.on('error', error => console.error(error) )
db.once('open', ()=>console.log('connect to DB'))

app.use(indexRoute)


app.listen(process.env.PORT,()=>{
    console.log(`server is up at port: http://127.0.0.1:${process.env.port}`)
})
