var mongoose = require('mongoose');
var thoughtSchema = new mongoose.Schema({
	title: {type:String, default:''},
	description: {type:String, default:''},
	upvotes: {type:Number, default:0},
	comments: [{type:mongoose.Schema.ObjectId, ref:'Comment'}]
});

var Thought = mongoose.model('Thought',thoughtSchema);
module.exports = Thought;

// upvote method
thoughtSchema.methods.upvote = function(cb){
	this.upvotes += 1;
	this.save(cb);
};


