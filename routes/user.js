var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController')

// Signup new user
router.post('/', userController.signup_user);

//Get all posts for a user
router.get('/:id/posts', userController.get_user_posts);
// This is still for debate since I'm concerned about the comment schema



// These two routes grab friend lists. 
// Client can add '?all=true' if they want to view friend requests as well,
// but the request must be for the current user. 
router.get('/friends', passport.authenticate('jwt', { session: false }), userController.get_user_friends);
// Need to check for any possible errors
router.get('/:id/friends', passport.authenticate('jwt', { session: false }), userController.get_user_friends);


// Grabs friend requests
//TESTED
router.get('/friendreq', passport.authenticate('jwt', { session: false }), userController.get_friend_requests);

//Create a new friend request
//TESTED
router.post('/friendreq/:id', passport.authenticate('jwt', { session: false }), userController.create_friend_request);

// Reject a friend request
//TESTED
router.delete('/friendreq/:id', passport.authenticate('jwt', { session: false }), userController.reject_friend_request);

// accept a friend request
//TESTED
router.put('/friendreq/:reqid', passport.authenticate('jwt', { session: false }), userController.accept_friend_request);

// Delete a friend 
router.delete('/friend/:id', passport.authenticate('jwt', { session: false }), userController.remove_friend);

module.exports = router;


