module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
      user_id: {
          type: DataTypes.INTEGER(10),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      username: {
          type: DataTypes.STRING(50),
          allowNull: false,
      },
      password: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
              isAlphanumeric: true
          }
      },
      user_img: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "http://downloadicons.net/sites/default/files/red-dragon-icon-49331.png",
          validate: {
              isUrl: true,
          }
      }
  });

// Relations
  User.associate = function (models) {
      User.hasMany(models.Hosted_games, {
          foreignKey: {
              allowNull: false
          }
      });
  };

  User.associate = function (models) {
      User.hasMany(models.Users_games, {
          foreignKey: {
              allowNull: false
          }
      });
  };

  return User;
};