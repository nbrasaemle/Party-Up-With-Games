module.exports = function (sequelize, Sequelize) {
  var Game_library = sequelize.define("Game_library", {
    game_id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    game_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    genre: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    banner_img: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  // Relations
  Game_library.associate = function (models) {
    Game_library.hasMany(models.Hosted_games, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Game_library;
};