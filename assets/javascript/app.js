

$(document).ready (function(){


    $("#go").on("click",function(event){
      event.preventDefault();
      var channelName=$("#channel").val();
      console.log(channelName)
      $(".artist-name").html(channelName);
      
        var queryURL="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&key=AIzaSyC30mnkcq5ly-Nr-kHMh0f05WwzzVtuO3Q&maxResults=10"
   
       $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var result= response;
        var vidId1=result.items[8].id.videoId;
        var object1='<iframe width=\"85%\" height=\"100%\" src =\"https://www.youtube.com/embed/' +vidId1+ '\"></iframe>';
        console.log(object1);
        var vidId2=result.items[9].id.videoId
        var object2='<iframe width=\"85%\" height=\"100%\"  src =\"https://www.youtube.com/embed/' +vidId2+ '\"></iframe>';
        console.log(object2);
        $("#results1").html(object1);
        $("#results2").html(object2);
      })
    })


}) 