const express = require('express');

const router = require("../router/posts.router");

const app = express();




app.get("/", (req, res)=>{
	res.send("Hello world with Express");
})

app.use("/api/v1", router);



module.exports = app;