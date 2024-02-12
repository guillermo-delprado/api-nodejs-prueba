import express from 'express';

import fs from "fs";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const config = require('./config');

var app = express();

app.use(cors(
  config.application.cors.server
));

const app = express();

const readData = () => {
    try{
    const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
    } catch (error){
        console.log(error);
    }
};

const writeData = () => {
    try{
    fs.writeFileSync("./db.json", JSON.stringify(data));
    } catch (error){
        console.log(error);
    }
};

app.get("/", (req, res) =>{
    res.send("API Proveedoressss");
});

//endoint get
app.get("/proveedores", (req,res) => {
    const data = readData();
    res.json(data.proveedores);
})

app.get("/proveedores/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const proveedor = data.proveedores.find((proveedor) => proveedor.id === id);
    res.json(proveedor);
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});