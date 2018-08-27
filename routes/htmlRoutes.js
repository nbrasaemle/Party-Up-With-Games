var db = require("../models");
var Sequelize = require("sequelize");
var moment = require("moment");
const Op = Sequelize.Op;

module.exports = function (app) {
  // Landing page
  app.get("/", function (req, res) {
    res.render("index");
  });
  // Ray added to get the logout to work.
  app.get("/index", function (req, res) {
    res.render("index");
  });

  // Signup form
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  //Sign in form
  app.get("/signin", function (req, res) {
    res.render("signin");
  });

  // Search routes
  app.get("/game/:game_id", function (req, res) {
    db.Game_library.findAll({
      where: {
        game_id: req.params.game_id
      }
    }).then(function (gameLib) {
      db.Hosted_games.findAll({
        where: {
          GameLibraryGameId: req.params.game_id,
          meeting_date: {
            [Op.gt]: moment().toDate()
          },
          is_full: false,
        }
      }).then(function (data) {
        res.render("game", {
          gameLib: gameLib,
          games: data
        })
      });
    });
  });

  // Show list of open games by genre
  app.get("/genres/:genre", function (req, res) {
    db.Hosted_games.findAll({
      where: {
        genre: req.params.genre,
        meeting_date: {
          [Op.gt]: moment().toDate()
        },
        is_full: false,
      }
    }).then(function (data) {
      res.render("genres", {
        header: req.params.genre,
        genre: data
      })
    });
  });

  // Party page routes
  app.get("/parties/:id", function (req, res) {
    db.Hosted_games.findAll({
      where: {
        hosted_gameid: req.params.id
      },
    }).then(function (parties) {
      var gameLibID = parties[0].GameLibraryGameId;
      db.Game_library.findAll({
        where: {
          game_id: gameLibID
        }
      }).then(function (gameLib) {
        var hostGameID = req.params.id;
        //console.log("id: " + hostGameID);
        db.Users_games.findAll({
          where: {
            HostedGameHostedGameid: hostGameID
          }
        }).then(function (userData) {
          //console.log(userData);
          res.render("party", {
            parties: parties,
            gameLib: gameLib,
            userData: userData
          });
        });
      });
    });
  });

    // Show list of game the User is hosting or a member of
    app.get("/dashboard/:id", function (req, res) {
      db.Hosted_games.findAll({
        where: {
          game_masterId: req.params.id
        }
      }).then(function (hostData) {
        res.render("dashboard", {
          hostData: hostData
        })
      });
    });

  app.get("/hosted-parties/:party_id", function (req, res) {
    res.render("hosted-party");
  });

  /*
  //Show list of open games grouped by game
  app.get("/games", function (req, res) {
    res.render("games/:id", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/views/.html"));
      //res.render("games");
    });
  });*/

  //Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
