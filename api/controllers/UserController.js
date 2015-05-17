/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	troy: function(req,res) {
	var request = require('request');	
	request('http://localhost:1337/user',function(err, response, body) {
		if (err) {
		console.log(err);
	}
	var list = JSON.parse(body);

 	res.view('troy', { title: 'Troy\'s Sails stuff', names:list});
	})
	},

	stuff: function(req, res) {
        var number = Math.floor((Math.random() * 500) +1); 
	res.view('stuff', { title: 'Welcome to the sails app', random:number });
	}	
};

