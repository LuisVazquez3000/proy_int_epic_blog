const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("post_database", "root","", {
	host:"localhost",
	dialect:"mysql",
	port:"3306"
})


class Post extends Model{
}

Post.init({
	post_id:{
		type:DataTypes.UUID,
		defaultValue:DataTypes.UUIDV4,
    primaryKey: true
	},
	title_post:{
		type:DataTypes.STRING,
		allowNull:false
	},
	content_post:{
		type:DataTypes.STRING(1234),
		allowNull:true
	},
	post_link:{
		type:DataTypes.STRING(2234),
		allowNull:true
	},
	date_create_post:{
		type:DataTypes.DATE,
		defaultValue:DataTypes.NOW
	}
},{
	sequelize,
	modelName:'Post'
})
console.log(Post === sequelize.models.Post);


module.exports = Post;

// async function testConnection(){
// 	try{
// 		await	sequelize.authenticate();	
// 		console.log("All good");
// 	}catch(err){
// 		console.log(err);
// 	}
	
// }

// testConnection();


