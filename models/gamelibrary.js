module.exports = function(sequelize, DataTypes) {
    var game_library = sequelize.define("game_library", {
      game_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2,50]
        }
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [2,50]
          }
      }
    });
    
    return game_library;
  };