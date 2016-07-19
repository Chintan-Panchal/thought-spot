var mongoose = require('mongoose');
var thoughtSchema = new mongoose.Schema({
	title: String,
	link: String,
	upvotes: {type:Number, default:0},
	comments: [{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}]
});

var Thought = mongoose.model('Thought',thoughtSchema);
module.exports = Thought;

// upvote method
thoughtSchema.methods.upvote = function(cb){
	this.upvotes += 1;
	this.save(cb);
};



