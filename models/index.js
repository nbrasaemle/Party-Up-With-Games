// Ray changed var config from starter template.
"use strict";
 
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Game_library.hasMany(db.Hosted_games);
db.Hosted_games.belongsTo(db.Game_library);
db.Hosted_games.belongsTo(db.User);
db.Hosted_games.hasMany(db.Users_games);
db.User.hasMany(db.Hosted_games);
db.User.hasMany(db.Users_games);
db.Users_games.belongsTo(db.User);
db.Users_games.belongsTo(db.Hosted_games);
 
module.exports = db;