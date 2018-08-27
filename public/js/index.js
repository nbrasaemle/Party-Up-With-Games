$(document).ready(function () {
  //function to change navbar's buttons (there has to be a key of "signedin" to attach to the navbar-blockers)
  $(document).on("click", "#sign-in-btn" || "#sign-up-btn", function () { });
  //values from the party form to post 
  $("#new-party").on("click", function (event) {
    event.preventDefault();
    console.log("here");
    var newParty = {
      gameName: $("#game-name")
        .val()
        .trim(),
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
        .trim(),
      time: $("#time")
        .val()
        .trim()
    };
    console.log(newParty);
    $.ajax("/api/parties", {
      type: "POST",
      data: newParty
    }).then(function () {
      console.log("posted Party", newParty);
      window.location.replace("/");
    });
  });

  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  var options = {
    format: 'mm-dd-yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true
  };
  date_input.datepicker(options);

  $(document).on("click", "#join-party", function () {
    var joinparty = {
      username: $("#user-signedIn"),
      HostedGameHostedGameid: $("#join-party").attr("data-hostedID-type"),
      UserUserId: $("#user-signedIn").attr('data-user_id-type')
    }

    $.ajax("/api/joinparty", {
      type: "POST",
      data: joinparty
    }).then(function () {
      window.location.replace("/");
    });
  });
});