
$(document).ready (function(){
    $("#go").on("click",function(event){
      event.preventDefault();
      var channelName=$("#channel").val();
      console.log(channelName)
      $(".artist-name").append(channelName);
      
        var queryURL="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&key=AIzaSyC30mnkcq5ly-Nr-kHMh0f05WwzzVtuO3Q&maxResults=3"
   
       $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var result= response;
        var vidId1=result.items[0].id.videoId;
        var object1='<iframe src =\"http://www.youtube.com/embed/' +vidId1+ '\"></iframe>';
        var vidId2=result.items[1].id.videoId
        var object2='<iframe src =\"http://www.youtube.com/embed/' +vidId2+ '\"></iframe>';
        $("#results1").append(object1);
        $("#results2").append(object2);
      })
    })
}) 