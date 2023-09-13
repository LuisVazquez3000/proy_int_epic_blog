const express = require('express');
const morgan = require("morgan");
const router = require("../router/posts.router");

const app = express();

app.use(morgan("dev"));



app.get("/", (req, res)=>{
	res.send("Hello world with Express");
})

app.use("/api/v1", router);



module.exports = app;