const express = require('express');
const morgan = require("morgan");
const router = require("../router/posts.router");
const app = express();

const path = require('path');
const dirpath = path.join(__dirname,"../views")
const dirpaths = path.join(__dirname,"../public")

app.use(morgan("dev"));
app.set('view engine', 'ejs');
app.set('views',dirpath);

console.log("dirname ",dirpath);


app.use(express.static(dirpaths));

app.get("/", (req, res)=>{
	res.render("index", {titulo: "Mi primer titulo con ejs"});
})
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/v1", router);



module.exports = app;