// Make a get request to our api route that will return every "open" game by id
$.get("/api/games/:id", function (data) {
    //console.log(json.stringify(data));
    // For each game that our server sends us back
    for (var i = 0; i < data.length; i++) {
        var gameName = data[i].game_name;
        var gameLibID = data[i].GameLibraryGameId;
        // Create a parent div to hold game data
        var gameSection = $("<div>");
        // Add a class to this div: 'well'
        gameSection.addClass(gameName);
        // Add an id to the game to mark which game it is
        gameSection.attr("id", "hosted-game-id-" + gameLibID);
        gameSection.attr("element-id", "element-id-" + i);
        // Append the game to the game-Section
        $("#game-Section").append(gameSection);

        // Now we add our game data to the div we just placed on the page
        $("#hosted-game-id-" + i).append("<h2>" + (i + 1) + ". " + data[i].game_name) + "</h2>");
        $("#hosted-game-id-" + i).append("<h3>Game Master: " + data[i].game_master + "</h4>");
        $("#hosted-game-id-" + i).append("<h3>Party Name: " + data[i].party_name + "</h4>");
        $("#hosted-game-id-" + i).append("<h3>Preferred player experience: " + data[i].player_exp_level + "</h4>");
        $("#hosted-game-id-" + i).append("<h3>Location: " + data[i].location + "</h4>");
        $("#hosted-game-id-" + i).append("<h3>Meeting Date: " + data[i].meeting_date + "</h4>");
    }
});