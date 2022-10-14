    import dotenv from 'dotenv';
    dotenv.config()

import express from "express";
import expressEjsLayouts from 'express-ejs-layouts';
import path ,{ dirname } from 'path';
import indexRoute from '../routes/indexRoute.js'

const app = express()
const __dirname = process.cwd()

app.set('view engine','ejs')
app.set('views',__dirname+'/resources/views')
app.set('layout',__dirname+'/resources/layout')

console.log()

app.use(expressEjsLayouts)
app.use(express.static(__dirname+'/public'))

app.use(indexRoute)


app.listen(process.env.PORT,()=>{
    console.log(`server is up at port: ${process.env.port}`)
})
