var db = require("../models");

module.exports = function(app) {
  // Landing page
  app.get("/", function(req, res) {
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