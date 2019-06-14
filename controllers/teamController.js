// ./controllers/teamController 

var Team = require('../models/teamModel');

//Display all teams
exports.team_list = function(req, res, next){
    Team.find({}, 'name')
        .exec(function (err, list_teams){
            if (err) { return next(err); }
            res.render('team_list', {title: 'Teams', team_list: list_teams });
        });
};

//Display a single team details on GET
exports.team_detail = function(req, res){
    res.send('TODO: team details' + req.params.id);
};

//Create team on POST
exports.team_create_post = function(req, res){
    var team = new Team(
        {name : req.body.name}
    );
    team.save(function (err) {
        if (err) return handleError(err);
    });
    res.send(req.body.name + ' Created!');
};

//Update team on POST
exports.team_update_post = function(req, res){
    res.send('TODO: team update on POST: '  + req.params.id);
};

//Delete team on POST
exports.team_delete_post = function(req, res){
    res.send('TODO: team delete on POST: '  + req.params.id);
};

//Display all fixtures for the given team
exports.team_fixture_list = function(req, res) {
    res.send('TODO: team fixtures: ' + req.params.id);
};
