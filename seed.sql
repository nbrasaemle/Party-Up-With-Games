-- The Schema and Seed below has been deprecated.  
-- Leaving this here as a reference for the moment.
use gamefinder_db;
    
    -- Inserted a set of records into the "game_library" table
INSERT INTO game_library (game_name, genre) VALUES ("Dungeons & Dragons","Role-playing");
INSERT INTO game_library (game_name, genre) VALUES ("Warhammer 40,000","Role-playing");
INSERT INTO game_library (game_name, genre) VALUES ("Pathfinder","Role-playing");
INSERT INTO game_library (game_name, genre) VALUES ("Pokemon Go","Social");
INSERT INTO game_library (game_name, genre) VALUES ("Magic the Gathering","Trading Card");
INSERT INTO game_library (game_name, genre) VALUES ("Settlers of Catan","Strategy");
INSERT INTO game_library (game_name, genre) VALUES ("Chess","Strategy");
INSERT INTO game_library (game_name, genre) VALUES ("Pandemic","Cooperative");

    
-- Inserted test users into the "users" table
INSERT INTO users (username, password, user_img) VALUES ("Lord Volumnus the IV", "password", "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1");
INSERT INTO users (username, password, user_img) VALUES ("Sarah", "password", "https://www.roomportal.co.uk/images/thumb_user_nophoto_female.png");
INSERT INTO users (username, password, user_img) VALUES ("Nate", "password", "https://eabiawak.com/wp-content/uploads/2017/07/photo.png");
INSERT INTO users (username, password, user_img) VALUES ("Fiona", "password", "http://www.i2clipart.com/cliparts/0/2/1/e/clipart-twenty-sided-dice-021e.png");

-- Inserted a test game into the "hosted_games" table
INSERT INTO hosted_games (game_master, party_name, location, latitude, longitude, description, player_exp_level, meeting_date, max_players) VALUES ("Lord Volumnus the IV", 1,"Dungeons and Dragons Starter Set", 1, "2057 Snelling Ave N, Roseville, MN 55113", "45.016133","-93.168266","This is open to new and veteran players alike.  I am an experienced DM looking to help new players learn the ins and outs of D&D and how to have fun.  We meet on the second Wednesday of each month.", "New", "2018-08-08 13:00:00",6);

-- Inserted test users into the "users_games" table