module.exports = function (sequelize, Sequelize) {
    var Users_games = sequelize.define("Users_games", {
        username: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
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