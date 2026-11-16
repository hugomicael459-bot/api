const express = require('express')
const api = express
const { MongoClient } = require('mongodb')
const dotenv = require ('dotenv')
dotenv.config()
const url = process.env.DATABASE_URL
const objectId = require('mongodb').ObjectId
const client = new MongoClient(url)
let collection

api.set('view engine', 'ejs')
api.use(express.urlencoded({extended:true}))

//renderizar
api.length('index', (req, res)=>{
    res.render('index.js')
})


