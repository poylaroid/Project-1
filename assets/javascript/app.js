$(document).ready(function () {


  $("#search-button").on("click", function (event) {
    event.preventDefault();
    var channelName = $("#search-term").val();
    //console.log(channelName)
    //$(".artist-name").html(channelName);

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channelName + "&key=AIzaSyC30mnkcq5ly-Nr-kHMh0f05WwzzVtuO3Q&maxResults=10"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      //console.log(response);
      var result = response;
      var vidId1 = result.items[8].id.videoId;
      var object1 = '<iframe width=\"85%\" height=\"100%\" src =\"https://youtube.com/embed/' + vidId1 + '\"></iframe>';
      //console.log(object1);
      var vidId2 = result.items[9].id.videoId
      var object2 = '<iframe width=\"85%\" height=\"100%\"  src =\"https://youtube.com/embed/' + vidId2 + '\"></iframe>';
      //console.log(object2);
      $("#results1").html(object1);
      $("#results2").html(object2);
    })
  })
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhnrk9-0tD9BiqoFMSGIBxW0RB5ZZgw-w",
    authDomain: "rutgers-project-1.firebaseapp.com",
    databaseURL: "https://rutgers-project-1.firebaseio.com",
    projectId: "rutgers-project-1",
    storageBucket: "rutgers-project-1.appspot.com",
    messagingSenderId: "938354969050"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var recentName = "";

  $("#search-button").on("click", function (event) {
    event.preventDefault();

    var recentName = $('#search-term').val().trim();

    console.log(recentName)
    database.ref().push({
      recentName: recentName

    });
  });
  database.ref().on("child_added", function (childSnapshot) {
    console.log("this " + childSnapshot.val())
    var recentName = childSnapshot.val().recentName;

    var tr = $("<tr>");
    var tdName = $("<td>").text(recentName);

    tr.prepend(tdName)
    $("#artist-data").prepend(tr);

    $("#clear").click(function(){
      $("#artist-data").empty();
  });
  });

});