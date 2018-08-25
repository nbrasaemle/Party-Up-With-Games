var db = require("../models");
var Sequelize = require("sequelize");
var moment = require("moment");
const Op = Sequelize.Op;

console.log(moment());

module.exports = function (app) {
  ////////// New routes //////////
  // Get list of all all open games by game_name and show only future, open games
  app.get("/api/games/:id", function (req, res) {
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
  app.get("/api/profile/:name", function (req, res) {
    // Get Hosted Games
    db.Hosted_games.findAll({
      where: {
        game_master: req.params.name
      }
    }).then(function (hostData) {
      // We have access to the todos as an argument inside of the callback function
      res.json(hostData);
    });
  });

  ////// OLD ROUTES /////
  /*app.get("/dashboard", function (req, res) 
    db.Game_library.findAll({}).then(function (dbGame_library) {
      res.json(dbGame_library);
    });
  
    db.Hosted_games.findAll({}).then(function (dbHosted_games) {
      res.json(dbHosted_games);
    });
  
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  
  // Get list of open hosted parties by game_ID
  app.get("/api/hosted-parties", function (req, res) {
    db.Hosted_games.findAll({}).then(function (dbHosted_games) {
      res.json(dbHosted_games);
    });
  });
  
  */

  // app.get("/api/:characters?", function(req, res) {
  //   // If the user provides a specific character in the URL...
  //   if (req.params.characters) {
  //     // Then display the JSON for ONLY that character.
  //     // (Note how we're using the ORM here to run our searches)
  //     Character.findOne({
  //       where: {
  //         routeName: req.params.characters
  //       }
  //     }).then(function(result) {
  //       return res.json(result);
  //     });
  //   }
  //   else {
  //     // Otherwise...
  //     // Otherwise display the data for all of the characters.
  //     // (Note how we're using Sequelize here to run our searches)
  //     Character.findAll({}).then(function(result) {
  //       return res.json(result);
  //     });
  //   }
  // });
}
