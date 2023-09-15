const router = require("express").Router();
const Post = require("../model/posts.model");

router.get("/posts", async(req, res)=>{
	const posts = await Post.findAll()
	res.render("./index",
		{
			posts
		}
	);
} )
// router.get("/posts", async(req, res)=>{
// 	const posts = await Post.findAll()
// 	res.status(200).json(
// 		{
// 			ok:true,
// 			status:200,
// 			body:posts
// 		}
// 	);
// } )
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


router.post("./create",async(req, res)=>{
	const data_post = req.body;
	await Post.sync();
	const createPost = await Post.create({

		title_post: data_post.title_post,
		content_post: data_post.content_post,
		post_link:data_post.post_link,
		date_create_post:data_post.date_create_post
	})
	res.render("create",
		{
			ok:true,
			status:201,
			message:"created post"
		}
	);
} )


router.get("/create", async(req, res)=>{
	res.render("create",
		{
			ok:true,
			status:201,
			message:"created post"
		}
	
	)})




router.put("/posts/:post_id",async(req, res)=>{
	
	const id = req.params.post_id;
	const data_post = req.body;
	const updateProduct = await Post.update(
		{
			title_post: data_post.title_post,
			content_post: data_post.content_post,
			post_link:data_post.post_link,
			date_create_post:data_post.date_create_post
		},
		{
			where:{post_id:id}
		}
	)
	res.status(200).json(
		{
			ok:true,
			status:200,
			body:updateProduct
		}
	);
} )


router.get("/edit", async(req, res)=>{
	res.render("edit",
		{
			ok:true,
			status:200,
			message:"update post"
		}
	
	)})



router.delete("/posts/:post_id",async(req, res)=>{
	const id = req.params.post_id;
	const deletePost = await Post.destroy({
		where:{
			post_id:id
		}
	})
	res.status(200).json(
		{
			ok:true,
			status:204,
			body:deletePost
		}
	);
} )


module.exports = router;