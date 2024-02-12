import express from 'express';
import fs from "fs";


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