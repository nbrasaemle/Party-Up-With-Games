-- Drops the "gamefinder_db" if it exists currently --
DROP DATABASE IF EXISTS gamefinder_db;
-- Creates the "gamefinder_db" database --
CREATE DATABASE IF NOT EXISTS gamefinder_db;


-- The Schema and Seed below has been deprecated.  
-- Leaving this here as a reference for the moment.
use gamefinder_db;

-- Created the table "game_library" to store values for a game dropdown field" 
CREATE TABLE game_library (
  game_id INT AUTO_INCREMENT,
  game_name VARCHAR(50) NOT NULL,
  game_img VARCHAR (255) NOT NULL,
  genre VARCHAR (50) NOT NULL,
  background_img VARCHAR (256) NOT NULL,
  PRIMARY KEY(game_id)
);   

-- Created users table to store all user id's and player avatar images.
CREATE TABLE user (
	user_id INT AUTO_INCREMENT,
    username VARCHAR (25) NOT NULL,
    password VARCHAR (25) NOT NULL,
    user_img VARCHAR (255) DEFAULT "http://downloadicons.net/sites/default/files/red-dragon-icon-49331.png",
    PRIMARY KEY(user_id)
    );

-- Created "hosted games" to store new games created by a "game master" for players to choose
CREATE TABLE hosted_games (
	hosted_gameid INT AUTO_INCREMENT,
    game_master VARCHAR (100) NOT NULL,
    game_master_userid INT (10) NOT NULL,
    party_name VARCHAR (100) NOT NULL,
    game_id INT (10) NOT NULL,
    location VARCHAR (200),
    latitude DECIMAL(10,8),
    longitude DECIMAL (11,8),
    description MEDIUMTEXT,
    player_exp_level VARCHAR (20) NOT NULL,
    meeting_date DATETIME (6) NOT NULL,
    max_players INT (3) NOT NULL,
    is_full BOOLEAN DEFAULT false,
    PRIMARY KEY(hosted_gameid),
    FOREIGN KEY fk_game(game_id)
    REFERENCES game_library(game_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
    FOREIGN KEY fk_user(game_master_userid)
    REFERENCES users(user_id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
    );
  
-- Created users_games table to create one location to store relation between each user/host and which games they are playing.
CREATE TABLE users_games (
	user_id INT (10) NOT NULL,
    hosted_gameid INT (10) NOT NULL,
    PRIMARY KEY (user_id, hosted_gameid),
    FOREIGN KEY fk_hostedgameid(hosted_gameid)
    REFERENCES hosted_games(hosted_gameid)
    ON DELETE CASCADE
    );
    
    -- Inserted a set of records into the "game_library" table
INSERT INTO game_library (game_name, game_img, genre, background_img) VALUES ("Dungeons & Dragons","https://i.pinimg.com/originals/84/ec/04/84ec049259ad086b83fafd120a2547c2.png","Role-playing","https://i.imgur.com/GmJsPZU.jpg");
INSERT INTO game_library (game_name, game_img, genre, background_img) VALUES ("Warhammer 40,000","https://upload.wikimedia.org/wikipedia/en/9/92/Warhammer40%2C000logo.png","Role-playing","http://wallpaperstock.net/warhammer-40%2C000-artwork_wallpapers_36270_1920x1080.jpg");
INSERT INTO game_library (game_name, game_img, genre, background_img) VALUES ("Pathfinder","https://i.pinimg.com/originals/44/7b/7a/447b7a2d630febb83790e1c239b4fb61.png","Role-playing","https://techraptor.net/wp-content/uploads/2018/03/pathfinder-paizo-core-book-cover-1320x743.jpg");
INSERT INTO game_library (game_name, game_img, genre, background_img) VALUES ("Pokemon Go","https://www.softexia.com/wp-content/uploads/2016/07/Pkoemon_GO_logo.png","Social","https://cdn.gamer-network.net/2018/usgamer/pokemon-go-logo-main.png");
INSERT INTO game_library (game_name, game_img, genre, background_img) VALUES ("Magic the Gathering","https://magiccards.com.au/sites/all/themes/theme729/images/magic_the_gathering.jpg","Trading Card","https://d37x086vserhlm.cloudfront.net/wp-content/uploads/2017/11/14092847/dataset-original.jpg");
INSERT INTO game_library (game_name, game_img, genre, background_img) VALUES ("Potluck","http://static.wixstatic.com/media/ecbfc2_1e914a0f4d51418ca1de69c9384f77c8~mv2_d_1440_1440_s_2.png_256","Miscellaneous","http://makeboardgame.com/wp-content/uploads/2017/07/tips-on-how-to-make-a-board-game.jpeg");
INSERT INTO game_library (game_name, game_img, genre, background_img) VALUES ("Chess","https://rnkdusrsctnts-mlseauq9snbpoibmw.netdna-ssl.com/images/256/93f6ccd6c0478de7cf735432f38f9ca9.jpg","Strategy","http://static2.uk.businessinsider.com/image/565c2f6edd08951b628b45d4/how-to-win-a-game-of-chess-in-two-moves.jpg");

    
-- Inserted test users into the "users" table
INSERT INTO users (username, user_img) VALUES ("Lord Volumnus the IV", "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1");
INSERT INTO users (username, user_img) VALUES ("Sarah", "https://www.roomportal.co.uk/images/thumb_user_nophoto_female.png");
INSERT INTO users (username, user_img) VALUES ("Nate", "https://eabiawak.com/wp-content/uploads/2017/07/photo.png");
INSERT INTO users (username, user_img) VALUES ("Fiona", "http://www.i2clipart.com/cliparts/0/2/1/e/clipart-twenty-sided-dice-021e.png");

-- Inserted a test game into the "hosted_games" table
INSERT INTO hosted_games (game_master, game_master_userid, party_name, game_id, location, latitude, longitude, description, player_exp_level, meeting_date, max_players) VALUES ("Lord Volumnus the IV", 1,"Dungeons and Dragons Starter Set", 1, "2057 Snelling Ave N, Roseville, MN 55113", "45.016133","-93.168266","This is open to new and veteran players alike.  I am an experienced DM looking to help new players learn the ins and outs of D&D and how to have fun.  We meet on the second Wednesday of each month.", "New", "2018-08-08 13:00:00",6);

-- Inserted test users into the "users_games" table
INSERT INTO users_games (user_id, hosted_gameid) VALUES (2,1);
INSERT INTO users_games (user_id, hosted_gameid) VALUES (3,1);
INSERT INTO users_games (user_id, hosted_gameid) VALUES (4,1);
