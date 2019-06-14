var express = require('express');
var router = express.Router();

//require controller modules
var fixture_controller = require('../controllers/fixtureController');
var league_controller = require('../controllers/leagueController');
var team_controller = require('../controllers/teamController');

/// LEAGUE ROOTS ///

// Get home page
router.get('/', league_controller.index);

// POST request to create a league
router.post('/league/create', league_controller.league_create_post);

//POST request to delete a league
router.post('/league/:id/delete', league_controller.league_delete_post);

//POST request to update a league
router.post('/league/:id/update', league_controller.league_update_post);

//GET request for one league
router.get('/league/:id', league_controller.league_table);

//GET request display list of leagues
router.get('/leagues', league_controller.league_list);


/// TEAM ROOTS ///

//POST request to create a team
router.post('/team/create', team_controller.team_create_post);

//POST request to delete a team
router.post('/team/:id/delete', team_controller.team_delete_post);

//POST request to update a team
router.post('/team/:id/update', team_controller.team_update_post);

//GET request for a team
router.get('/team/:id', team_controller.team_detail);

//GET request for list of teams
router.get('/teams', team_controller.team_list);

//GET request for a list of team fixture


/// FIXTURE ROOTS ///

// POST request to create a fixture
router.post('/fixture/create', fixture_controller.fixture_create_post);

// POST request to delete a fixture
router.post('/fixture/:id/delete', fixture_controller.fixture_delete_post);

// POST request to update a fixture
router.post('/fixture/:id/update', fixture_controller.fixture_update_post);

// Get request for a single fixture
router.get('/fixture/:id', fixture_controller.get_fixture);

// GET request for a list of fixture,
router.get('/fixtures', fixture_controller.complete_fixture_list);

module.exports = router;