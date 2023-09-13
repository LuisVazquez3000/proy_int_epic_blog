const router = require("express").Router();


router.get("/posts/{id}",(req, res)=>{
	res.send("this is a router");
} )
router.get("/posts",(req, res)=>{
	res.send("this is a router");
} )
router.post("/posts",(req, res)=>{
	res.send("this is a router");
} )
router.put("/posts",(req, res)=>{
	res.send("this is a router");
} )
router.delete("/posts",(req, res)=>{
	res.send("this is a router");
} )


module.exports = router;