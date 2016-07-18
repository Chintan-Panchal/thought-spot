var mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
	body: String,
	auther:String,
	upvotes:{type: Number,default:0},
	post:{type:mongoose.Schema.Types.ObjectId, ref:'Post'}
});

mongoose.model('Comment', commentSchema);

// upvote method
CommentSchema.methods.upvote = function(cb){
	this.upvotes += 1;
	this.save(cb);
};