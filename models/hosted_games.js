module.exports = function (sequelize, Sequelize) {
    var Hosted_games = sequelize.define("Hosted_games", {
        hosted_gameid: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        game_name: {
            type: Sequelize.STRING(100)
        },
        game_master: {
            type: Sequelize.STRING(100)
        },
        game_masterId: {
            type: Sequelize.INTEGER(10)
        },
        genre: {
            type: Sequelize.STRING(50)
        },
        party_name: {
            type: Sequelize.STRING(100)
        },
        location: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT("long")
        },
        player_exp_level: {
            type: Sequelize.STRING(20)
        },
        meeting_date: {
            type: Sequelize.DATE(6)
        },
        max_players: {
            type: Sequelize.INTEGER(3)
        },
        is_full: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    /*
    // Relations
    Hosted_games.associate = function (models) {
        Hosted_games.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Hosted_games.associate = function (models) {
        Hosted_games.belongsTo(models.Game_library, {
            foreignKey: {
                allowNull: false
            }
        });
    };
   
    Hosted_games.associate = function (models) {
        Hosted_games.hasMany(models.Users_games, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    */
    return Hosted_games;
};