// ./controllers/leagueController 

var League = require('../models/leagueModel');

exports.index = function(req, res){
    res.send('TODO: Site home page');
};

//Display all leagues
exports.league_list = function(req, res){
    res.send('TODO: display all leagues');
};

//Create league on POST
exports.league_create_post = function(req, res){
    res.send('TODO: league create GET');
};

//Update league on POST
exports.league_update_post = function(req, res){
    res.send('TODO: league update on POST: '  + req.params.id)
};

//Delete league on POST
exports.league_delete_post = function(req, res){
    res.send('TODO: league delete on POST: '  + req.params.id);
};

//Display all fixtures for the given league
exports.league_fixture_list = function(req, res) {
    res.send('TODO: league fixtures: ' + req.params.id);
};

//Display league table for given league
exports.league_table = function(req, res){
    res.send('TODO: league table');
};
