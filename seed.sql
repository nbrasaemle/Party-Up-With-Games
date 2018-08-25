use gamefinder_db;

    -- Inserted a set of records into the "game_library" table
INSERT INTO game_libraries (game_name, genre, createdAt, updatedAt) VALUES ("Dungeons & Dragons","Role-playing", NOW(), NOW());
INSERT INTO game_libraries (game_name, genre, createdAt, updatedAt) VALUES ("Warhammer 40,000","Role-playing", NOW(), NOW());
INSERT INTO game_libraries (game_name, genre, createdAt, updatedAt) VALUES ("Pathfinder","Role-playing", NOW(), NOW());
INSERT INTO game_libraries (game_name, genre, createdAt, updatedAt) VALUES ("Pokemon Go","Social", NOW(), NOW());
INSERT INTO game_libraries (game_name, genre, createdAt, updatedAt) VALUES ("Magic the Gathering","Trading Card", NOW(), NOW());
INSERT INTO game_libraries (game_name, genre, createdAt, updatedAt) VALUES ("Settlers of Catan","Strategy", NOW(), NOW());
INSERT INTO game_libraries (game_name, genre, createdAt, updatedAt) VALUES ("Chess","Strategy", NOW(), NOW());
INSERT INTO game_libraries (game_name, genre, createdAt, updatedAt) VALUES ("Pandemic","Cooperative", NOW(), NOW());

-- Inserted test users into the "users" table
INSERT INTO users (username, password, user_img, createdAt, updatedAt) VALUES ("Lord Volumnus the IV", "password", "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1", NOW(), NOW());
INSERT INTO users (username, password, user_img, createdAt, updatedAt) VALUES ("Sarah", "password", "https://www.roomportal.co.uk/images/thumb_user_nophoto_female.png", NOW(), NOW());
INSERT INTO users (username, password, user_img, createdAt, updatedAt) VALUES ("Nate", "password", "https://eabiawak.com/wp-content/uploads/2017/07/photo.png", NOW(), NOW());
INSERT INTO users (username, password, user_img, createdAt, updatedAt) VALUES ("Fiona", "password", "http://www.i2clipart.com/cliparts/0/2/1/e/clipart-twenty-sided-dice-021e.png", NOW(), NOW());

-- Insert hosted game placeholder
INSERT INTO hosted_games (game_name, game_master, party_name, location, latitude, longitude, description, player_exp_level, meeting_date, max_players, createdAt, updatedAt, GameLibraryGameId) 
VALUES ("Dungeons & Dragons", "Sarah", "Started Pack", "2057 Snelling Ave N, Roseville, MN 55113","45.016133","-93.168266", "Testing", "Noob", '2018-08-29 12:00:00', 6, now(), now(),1);
INSERT INTO hosted_games (game_name, game_master, party_name, location, latitude, longitude, description, player_exp_level, meeting_date, max_players, createdAt, updatedAt, GameLibraryGameId) 
VALUES ("Chess", "Nate", "Timed", "2057 Snelling Ave N, Roseville, MN 55113","45.016133","-93.168266", "Testing", "Master", '2018-08-30 12:00:00', 2, now(), now(),7);
   
-- Insert users into users_games
INSERT INTO users_games (UserUserId, HostedGameHostedGameid, username, createdAt, updatedAt) VALUES (3, 1, "Nate", NOW(), NOW());
INSERT INTO users_games (UserUserId, HostedGameHostedGameid, username, createdAt, updatedAt) VALUES (4, 1, "Fiona", NOW(), NOW());
INSERT INTO users_games (UserUserId, HostedGameHostedGameid, username, createdAt, updatedAt) VALUES (1, 2, "Lord Volumnus the IV", NOW(), NOW());
INSERT INTO users_games (UserUserId, HostedGameHostedGameid, username, createdAt, updatedAt) VALUES (4, 2, "Fiona", NOW(), NOW());
