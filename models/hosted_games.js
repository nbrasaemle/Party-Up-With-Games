module.exports = function (sequelize, DataTypes) {
    var Hosted_games = sequelize.define("Hosted_games", {
        hosted_gameid: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        game_master: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        party_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        location: {
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        latitude: {
            type: DataTypes.DECIMAL(10, 8),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        longitude: {
            type: DataTypes.DECIMAL(11, 8),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        description: {
            type: DataTypes.TEXT("long"),
        },
        player_exp_level: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        meeting_date: {
            type: DataTypes.DATE(6),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        max_players: {
            type: DataTypes.INTEGER(3),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        is_full: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            validate: {
                notNull: true
            }
        }
    });

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

    return Hosted_games;
};