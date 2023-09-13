const router = require("express").Router();
const Post = require("../model/posts.model");

router.get("/posts", async(req, res)=>{
	const posts = await Post.findAll()
	res.status(200).json(
		{
			ok:true,
			status:200,
			body:posts
		}
	);
} )
router.get("/posts/:post_id",async (req, res)=>{
	const id = req.params.post_id;
	const post = await Post.findOne({
		where:{post_id:id}
	});
	res.status(200).json(
		{
			ok:true,
			status:200,
			body:post
		}
	);
} )


router.post("/posts",async(req, res)=>{
	const data_post = req.body;
	await Post.sync();
	const createPost = await Post.create({

		title_post: data_post.title_post,
		content_post: data_post.content_post,
		post_link:data_post.post_link,
		date_create_post:data_post.date_create_post
	})
	res.status(201).json(
		{
			ok:true,
			status:201,
			message:"created post"
		}
	);
} )
router.put("/posts",(req, res)=>{
	res.send("this is a router");
} )
router.delete("/posts",(req, res)=>{
	res.send("this is a router");
} )


module.exports = router;