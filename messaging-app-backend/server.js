 import pkg from "express";
// import mongoose from "mongoose";

//App config
const {Express} = pkg;
const port = process.env.PORT || 5000;

//Middleware
//Database config
Express.get("/", (req, res) => res.status(200).send("Hello Franklin"));
// Express.PORT(port)
//Listener
Express.listen(port, () => console.log(`Listening on localhost: ${port}`));






