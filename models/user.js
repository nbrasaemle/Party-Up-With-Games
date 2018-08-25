module.exports = function (sequelize, Sequelize) {
    var User = sequelize.define("User", {
        user_id: {
            type: Sequelize.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        user_img: {
            type: Sequelize.STRING,
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