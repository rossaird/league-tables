var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new Schema({
    homeTeam: {type: Schema.Types.ObjectId, ref: 'Team', required: true},
    homeScore: {type: Number},
    awayTeam: {type: Schema.Types.ObjectId, ref: 'Team', required: true},
    awayScore: Number,
    league: {type: Schema.Types.ObjectId, ref: 'League', required: true},
    datePlayed: {type: Date, default: Date.now },

});

//virtual for match result
MatchSchema
    .virtual('result')
    .get(function () {
        return this.homeTeam + ' ' + this.homeScore + ' v ' + this.awayScore + ' ' + this.awayTeam;
    });

//virtual for match fixture
MatchSchema
    .virtual('fixture')
    .get(function () {
        return this.homeTeam + ' v ' + this.awayTeam;
    });


module.exports = mongoose.model('Match', MatchSchema);