module.exports = function (sequelize, DataTypes) {
  var Game_library = sequelize.define("Game_library", {
    game_id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    }
  });

  // Relations
  Game_library.associate = function (models) {
    Game_library.belongsTo(models.Users_games, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Game_library.associate = function (models) {
    Game_library.belongsTo(models.Hosted_games, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Game_library;
};