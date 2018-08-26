var db = require("../models");
var Sequelize = require("sequelize");
var moment = require("moment");
const Op = Sequelize.Op;

module.exports = function(app) {
  // Landing page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // Ray added to get the logout to work.
  app.get("/index", function(req, res) {
    res.render("index");
  });

  // Signup form
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  //Sign in form
  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/game/:game_id", function(req, res){
    db.Hosted_games.findAll({
      where: {
        GameLibraryGameId: req.params.game_id,
        meeting_date: {
          [Op.gt]: moment().toDate()
        },
        is_full: false,
      }
    }).then(function (data) {
      //console.log(data);
      res.render("game", {
      games: data
      })
    }); 
  });
  
  app.get("/parties/:party_id", function(req,res){
    db.Hosted_games.findAll({
      where: {
        hosted_gameid: req.params.party_id
      },
      include: [{ model: db.Users_games }]
    }).then(function (data) {
      console.log(data);
      res.render("party", {
        parties: data
      });
    });
  });

  app.get("/hosted-parties/:party_id", function(req, res){
    res.render("hosted-party");
  });

  // Show list of open games by genre
  app.get("/genres", function(req, res) {
    res.render("genres/:genre", function(req, res) {
      res.render("genres");
    });
  });

  //Show list of open games grouped by game
  app.get("/games", function(req, res) {
    res.render("games/:id", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/views/.html"));
      //res.render("games");
    });
  });

  /* Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });*/
};
