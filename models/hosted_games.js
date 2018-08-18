module.exports = function (sequelize, DataTypes) {
    var hosted_games = sequelize.define("hosted_games", {
        gamed_master: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notNull: true
            }
        },
        game_master_userid: {
            type: DataTypes.INTEGER,
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
        game_id: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.MEDIUMTEXT,
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

    return hosted_games;
};