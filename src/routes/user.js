const express = require ("express");
const userSchema = require("../models/user");

const router = express.Router();

//crear usuario o end point
router.post("/users", (req,res) => {
   // res.send("create user");
  const user =  userSchema(req.body);
  user.save()
  .then((data) => res.json(data))
  .catch((error) => res.json( { message: error}));
});

//get buscar todos los usuarios
router.get("/users", (req,res) => {
    
   userSchema
   .find()
   .then((data) => res.json(data))
   .catch((error) => res.json( { message: error}));
 });

 //get buscar un usuario especifico
router.get("/users/:id", (req,res) => {
    const {id} = req.params;
    
   userSchema
   .findById(id)
   .then((data) => res.json(data))
   .catch((error) => res.json( { message: error}));
 });


//actualizar-editar
router.put("/users/:id", (req,res) => {
    const {id} = req.params;
    const { name, age, email} = req.body
    
   userSchema
   .updateOne({ _id: id}, { $set: {name, age, email}})
   .then((data) => res.json(data))
   .catch((error) => res.json( { message: error}));
 });

 //eliminar usuario
router.delete("/users/:id", (req,res) => {
  const {id} = req.params;
  
   userSchema
 .deleteOne({ _id: id})
 .then((data) => res.json(data))
 .catch((error) => res.json( { message: error}));
});


module.exports = router;