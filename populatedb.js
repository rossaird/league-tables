var Team = require('./models/teamModel');

var mongoose = require('mongoose');
var getDatabase = require('./database/mongo');

function populateTeams() {
    var team1 = new Team(
        {
            name: 'Aberdeen'
        }
    );
    team1.save(function (err) {
        if (err) return handleError(err);
    });

    var team2 = new Team(
        {
            name: 'Peterhead'
        }
    );
    team2.save(function (err) {
        if (err) return handleError(err);
    });

    var team3 = new Team(
        {
            name: 'Copenhagen'
        }
    );
    team3.save(function (err) {
        if (err) return handleError(err);
    });
}

module.exports = { populateTeams };