var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup", { message: req.flash("message") });
};

exports.signin = function(req, res) {
  res.render("signin", { message: req.flash("message") });
};

exports.dashboard = function(req, res) {
  res.render("dashboard", { username: req.user.username, signedin: true });
};
// Ray added to control the navbar login logout
exports.index = function(req, res) {
  res.render("index", { username: req.user.username, signedin: true });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
