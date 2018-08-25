module.exports = function (sequelize, Sequelize) {
    var Hosted_games = sequelize.define("Hosted_games", {
        hosted_gameid: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        game_name: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validate: {
                notNull: true
            }
        },game_masterId: {
            type: Sequelize.INTEGER(10),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        game_master: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        party_name: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        latitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -90, max: 90 }
          },
          longitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -180, max: 180 }
          },
        description: {
            type: Sequelize.TEXT("long"),
        },
        player_exp_level: {
            type: Sequelize.STRING(20),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        meeting_date: {
            type: Sequelize.DATE(6),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        max_players: {
            type: Sequelize.INTEGER(3),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        is_full: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            validate: {
                notNull: true
            }
        }
    });

    // Relations
/*    Hosted_games.associate = function (models) {
        Hosted_games.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };*/

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
    
    return Hosted_games;
};