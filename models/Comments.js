var mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
	comment: {type:String, default:''},
	author: {type:String, default:''},
    upvotes:{type: Number,default:0},
	post:{type:mongoose.Schema.ObjectId, ref:'Thought'}
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;

// upvote method
commentSchema.methods.upvote = function(cb){
	this.upvotes += 1;
	this.save(cb);
};