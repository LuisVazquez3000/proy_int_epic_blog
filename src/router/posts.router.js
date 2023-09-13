const router = require("express").Router();


router.get("/posts",(req, res)=>{
	res.send("this is a router");
} )


module.exports = router;