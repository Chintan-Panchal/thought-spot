var express = require('express');
var mongoose = require('mongoose');
var Thought = mongoose.model('Thought');
var Comment = mongoose.model('Comment');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET all thoughts
router.get('/thoughts', function(req, res, next){
    Thought.find(function(err,thoughts){
		if(err){
			return next(err);
		}
		res.json(thoughts);
	});
});

// POST for creating thoughts
router.post('/thoughts', function(req, res, next){
	var thought = new Thought(req.body);
    thought.save(function(err, thoughts){
		if(err){
			return next(err);
		}
		res.json(thoughts);
	});
});

// Create a route for pre-loading thought objects
router.param('thought', function(req, res, next, id){
	var query = Thought.findById(id);
	query.exec(function(err, thoughts){
		if(err){
			return next(err);
		}
		if(!thoughts){
			return next(new Error('Can\'t find thoughts'));
		}
		req.thought = thoughts;
		return next();
	});
});

// return single thought, retrieve comments along with thought
router.get('/thoughts/:thought', function(req, res, next){
    req.thought.populate('comments', function (err, thoughts) {
       if(err){
           return next(err);
       }
        res.json(req.thoughts);
    });
});

// create upvote route for a particular thought
router.put('/thoughts/:thought/upvote', function(req, res, next){
	req.thought.upvote(function(err, thoughts){
		if(err){
			return next(err);
		}
		res.json(thoughts);
	});
});

// create comment route for a particular thought
router.post('/thoughts/:thought/comments', function(req, res, next){
	var comment = new Comment(req.body);
	comment.thought = req.thought;
	comment.save(function(err, comments){
		if(err){
			return next(err);
		}
		req.thought.comments.push(comments);
		req.thought.save(function(err, thoughts){
			if(err){
				return next(err);
			}
			res.json(comments);
		});
	});
});

// Create a route for pre-loading comment objects
router.param('comment', function(req, res, next, id){
	var query = Comment.findById(id);
	query.exec(function(err, comments){
		if(err){
			return next(err);
		}
		if(!comments){
			return next(new Error('Can\'t find comment'));
		}
		req.comment = comments;
		return next();
	});
});

module.exports = router;
