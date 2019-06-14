var Match = require('./models/leagueModel');

var mongoose = require('mongoose');
var getDatabase = requre('./database/mongo');

function createFixture(home_team, away_team, league, dateplayed) {
    var fixture = new Match(
        {
            homeTeam: home_team,
            awayTeam: away_team,
            league: league,
            datePlayed: dateplayed
        }
    );
    fixture.save(function (err) {
        if (err) return handleError(err);
        
    });
}