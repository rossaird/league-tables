// ./controllers/fixtureController 

var Fixture = require('../models/matchModel');

//Display all fixtures in the database
exports.complete_fixture_list = function(req, res) {
    res.send('NOT IMPLEMENTED: fixture list');
};

//Display a particular fixture on GET
exports.get_fixture = function (req, res){
    res.send('TODO: single fixture');
};

//Create fixture on POST
exports.fixture_create_post = function(req, res){
    res.send('TODO: create fixture POST');
};

//Update fixture on POST
exports.fixture_update_post = function(req, res){
    res.send('TODO: update fixture POST');
};

//Delete fixture on POST
exports.fixture_delete_post = function(req, res){
    res.send('TODO: delete fixture POST');
};