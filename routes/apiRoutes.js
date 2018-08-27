var db = require("../models");
var Sequelize = require("sequelize");
var moment = require("moment");
const Op = Sequelize.Op;

console.log(moment());

module.exports = function (app) {
  ////////// New routes //////////
  // Get list of all all open games by game_name and show only future, open games
  app.get("/api/game/:id", function (req, res) {
    db.Hosted_games.findAll({
      where: {
        GameLibraryGameId: req.params.id,
        meeting_date: {
          [Op.gt]: moment().toDate()
        },
        is_full: false
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  // Get the hosted_game by hosted_game_ID and show players
  app.get("/api/parties/:id", function (req, res) {
    db.Hosted_games.findAll({
      where: {
        hosted_gameid: req.params.id
      },
      include: [{ model: db.Users_games }]
    }).then(function (data) {
      res.json(data);
    });
  });

  // Get all future games filtered by genre, then filter to show only future games where the party is not full
  app.get("/api/genres/:genre", function (req, res) {
    db.Game_library.findAll({
      where: {
        genre: req.params.genre
      },
      include: [{
        model: db.Hosted_games,
        where: {
          meeting_date: {
            [Op.gt]: moment().toDate()
          },
          is_full: false
        }
      }]
    }).then(function (data) {
      res.json(data);
    });
  });

  // Get all of the User's hosted and Party games
  app.get("/api/profile/host/:name", function (req, res) {
    // Get Hosted Games
    db.Hosted_games.findAll({
      where: {
        game_master: req.params.name
      }
    }).then(function (hostData) {
      res.json(hostData);
    });
  });

  app.get("/api/profile/member/:id", function (req, res) {
    // Get Party Member Games
    db.Users_games.findAll({
      where: {
        UserUserId: req.params.id
      }
    }).then(function (userData) {
      res.json(userData);
    });
  });

  // POST route for creating a new hosted game. 
  app.post("/api/newparty", function (req, res) {
    db.Hosted_games.create({
      game_name: req.body.gameName,
      game_master: req.body.username,
      game_masterid: req.body.userid,
      genre: req.body.genre,
      party_name: req.body.partyName,
      location: req.body.address,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      description: req.body.description,
      player_exp_level: req.body.experience,
      meeting_date: req.body.date,
      max_players: req.body.numberOfPlayers,
      is_full: false,
      GameLibraryGameId: req.body.gameID
    }).then(function (dbGame) {
      res.json(dbGame);
    });
  });

  // POST route for joining party. 
  app.post("/api/joinparty", function (req, res) {
    db.Users_games.create({
      username: req.body.username,
      HostedGameHostedGameid: req.body.hostedGameID,
      UserUserId: req.body.userID
    }).then(function (dbUserGame) {
      res.json(dbUserGame);
    });
  });

  // PUT route for updating hosted games
  app.put("/api/editparty", function (req, res) {
    db.Hosted_games.update(
      {
        party_name: req.body.partyName,
        location: request.body.location,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description,
        player_exp_level: req.body.experience,
        meeting_date: req.body.meetingDate,
        max_players: req.body.maxPlayers,
        is_full: false,
      },
      {
        where: {
          hosted_gameid: req.body.hostedGameId
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
  });
};
