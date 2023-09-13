const express = require('express');
const morgan = require("morgan");
const router = require("../router/posts.router");

const app = express();

app.use('view engine', 'ejs');
app.use('views', __dirname + '/views');

app.use(morgan("dev"));



app.get("/", (req, res)=>{
	res.send("Hello world with Express");
})



app.use(express.json());
app.use("/api/v1", router);



module.exports = app;