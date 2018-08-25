//load bcrypt
var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;

  passport.serializeUser(function(user, done) {
    done(null, user.user_id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(user_id, done) {
    User.findById(user_id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, username, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({ where: { username: username } }).then(function(user) {
          if (user) {
            return done(
              null,
              false,
              req.flash("message", "Sorry, that username is already taken.")
            );
          } else {
            var userPassword = generateHash(password);
            var data = {
              username: username,
              password: userPassword
            };

            User.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                //console.log(newUser);
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );

  //LOCAL SIGNIN
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, username, password, done) {
        var User = user;

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({ where: { username: username } })
          .then(function(user) {
            if (!user) {
              return done(
                null,
                false,
                req.flash("message", "username incorrect, please try again.")
              );
            }

            if (!isValidPassword(user.password, password)) {
              return done(
                null,
                false,
                req.flash("message", "password incorrect, please try again.")
              );
            }

            var userinfo = user.get();
            //console.log(userinfo);
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin"
            });
          });
      }
    )
  );
};
