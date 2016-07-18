var express = require('express');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET all posts
router.get('/posts', function(req, res, next){
	Post.find(function(err,posts){
		if(err){
			return next(err);
		}
		res.json(posts);
	});
});

// POST for creating posts
router.post('/posts', function(req, res, next){
	var post = new Post(req.body);
	post.save(function(err, post){
		if(err){
			return next(err);
		}
		res.json(post);
	});
});

// Create a route for pre-loading post objects
router.param('post', function(req, res, next, id){
	var query = Post.findById(id);
	query.exec(function(err, post){
		if(err){
			return next(err);
		}
		if(!post){
			return next(new Error('Can\'t find post'));
		}
		req.post = post;
		return next();
	});
});

// return single post
router.get('/posts/:post', function(req, res){
	res.json(req.post);
});

// create upvote route for a particular post
router.put('/posts/:post/upvote', function(req, res, next){
	req.post.upvote(function(err, post){
		if(err){
			return next(err);
		}
		res.json(post);
	});
});

// create comment route for a particular post
router.post('/posts/:post/comments', function(req, res, next){
	var comment = new Comment(req.body);
	comment.post = req.post;
	comment.save(function(err, comment){
		if(err){
			return next(err);
		}
		req.post.comments.push(comment);
		req.post.save(function(err, post){
			if(err){
				return next(err);
			}
			res.json(comment);
		});
	});
});

// Create a route for preloading comment objects
router.param('comment', function(req, res, next, id){
	var query = Comment.findById(id);
	query.exec(function(err, comment){
		if(err){
			return next(err);
		}
		if(!comment){
			return next(new Error('Can\'t find comment'));
		}
		req.comment = comment;
		return next();
	});
});

module.exports = router;
