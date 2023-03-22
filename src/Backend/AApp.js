const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.post("/usuario/login", (req,res)=>{
    const usuario =req.body.usuario;
    const clave =req.body.clave;
   if(usuario=="juanAcsota" && clave=="123456" ){
    const datos ={
        id:"123",
        nombre:"juan Acosta",
        email:"juanacosta@gmail.com",
        Codigo:"ABCDE123"
    };
    res.status(200).json(datos);
   }else{
    res.status(400).send("usuario No valido")
   }
});

app.get("/usurio/:id/ventas",(req, res)=>{
    
} );

app.listen(3001, ()=>{
    console.log("servidor iniciaondo por el puerto 3001")
} )