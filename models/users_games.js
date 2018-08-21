module.exports = function (sequelize, DataTypes) {
    var Users_games = sequelize.define("Users_games", {

    });

    // Relations
    Users_games.associate = function (models) {
        Users_games.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Users_games.associate = function (models) {
        Users_games.belongsTo(models.Hosted_games, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Users_games;
};