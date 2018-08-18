module.exports = function(sequelize, DataTypes) {
    var users_games = sequelize.define("users_games", {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: true
        }
      },
      hosted_gameid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: true
        }
      }
    });
    
    return users_games;
  };