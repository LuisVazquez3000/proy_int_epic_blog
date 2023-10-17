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
	res.render("edit",{post:post})
} )


router.post("/create",async(req, res)=>{
	const data_post = req.body;
	await Post.sync();
	console.log(data_post);
	const createPost = await Post.create({

		title_post: data_post.title_post,
		content_post: data_post.content_post,
		post_link:data_post.post_link,
		date_create_post:data_post.date_create_post
	})
	
	console.log(createPost);

	 res.redirect('/api/v1/posts');
	// res.render("create",
	// 	{
	// 		ok:true,
	// 		status:201,
	// 		message:"created post"
	// 	}
	// );
} )


router.get("/create", async(req, res)=>{
	res.render("create",
		{
			ok:true,
			status:201,
			message:"created post"
		}
	
	)})

	
	
	
	router.get("/edit/:post_id", async(req, res)=>{
		const id = req.params.post_id;
		const postFound = await Post.findOne({id});
		console.log("objeto encontrado ", postFound);
		
		res.render("edit",{post:postFound})
		
	})

// 	router.put("/posts/:post_id", async(req, res)=>{
// 		const id = req.params.post_id;
// 		const {title_post, content_post,post_link,date_create_post} = req.body;
			
// 		//query = `UPDATE post_database.posts SET title_post=${title_post}, content_post=${content_post},post_link=${post_link}, date_create_post=null
// 		//where post_id = ${id} 	
// 		//`
// 		const nuevoPost = {
// 				title_post:title_post,
// 				content_post:content_post,
// 				post_link:post_link,
// 				date_create_post:date_create_post
// 		}
		
// 			await Post.update(nuevoPost,{where:{post_id:id,}})
// 			res.redirect('/posts');
// } )
	router.put("/posts/:post_id", (req, res)=>{
		const id = req.params.post_id;
		const {title_post, content_post,post_link,date_create_post} = req.body;
		
		Post.findByPk(id)
		.then((post)=>{
			post.title_post=title_post,
			post.content_post=content_post,
			post.post_link=post_link,
			post.date_create_post=date_create_post
			return post.save();
		}).then(()=>{
			res.redirect('/posts');
		}).catch((error)=>{
			console.log(error);
		})
		// const nuevoPost = {
		// 		title_post:title_post,
		// 		content_post:content_post,
		// 		post_link:post_link,
		// 		date_create_post:date_create_post
		// }
		
			// Post.update(nuevoPost,{where:{post_id:id,}})
			
} )




router.delete("/delete/:post_id",async(req, res)=>{
	const {post_id} = req.params;
	console.log(post_id);
	const deletePost = await Post.destroy({
		where:{
			post_id
		}
	})
	
	
	res.status(204).json(
		{
			ok:true,
			status:204,
			body:deletePost
		}
	);
} )



module.exports = router;