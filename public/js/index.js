$(document).ready(function () {
  //function to change navbar's buttons (there has to be a key of "signedin" to attach to the navbar-blockers)
  $(document).on("click", "#sign-in-btn" || "#sign-up-btn", function () { });
  //values from the party form to post 
  $("#new-party").on("click", function (event) {
    event.preventDefault();
    var newParty = {
      gameName: $("#game-name option:selected").text(),
      username: $("#uid").attr("data_username"),
      userid: $("#uid").attr("data-user_id-type"),
      genre: $("#game-name option:selected").attr("data-id"),
      gameID: $("#game-name option:selected").attr("value"),
      partyName: $("#party-name")
        .val()
        .trim(),
      address: $("#address-input")
        .val()
        .trim(),
      description: $("#description")
        .val()
        .trim(),
      experience: $("#experience-level")
        .val()
        .trim(),
      numberOfPlayers: $("#num-players")
        .val()
        .trim(),
      date: $("#date")
        .val()
        .trim()
    };
    console.log(newParty);
    $.ajax("/api/newparty", {
      type: "POST",
      data: newParty
    }).then(function () {
      //console.log("posted Party", newParty);
      location.reload();
    });
  });

  // Date picker logic
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  var options = {
    format: 'mm-dd-yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true
  };
  date_input.datepicker(options);


  // Joing party logic
  $(document).on("click", "#join-party", function () {
    var joinparty = {
      username: $("#uid").attr("data_username"),
      HostedGameHostedGameid: $("#join-party").attr("data-hostedID-type"),
      UserUserId: $("#uid").attr("data-user_id-type"),
    };
    console.log(joinparty);
    $.ajax("/api/joinparty", {
      type: "POST",
      data: joinparty
    }).then(function () {
      location.reload();
    });
  });
});