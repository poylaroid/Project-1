

$(document).ready (function(){
    $("#butt").on("click",function(event){
      event.preventDefault();
      var channelName=$("#channel").val();
      console.log(channelName)
      
        var queryURL="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&key=AIzaSyC30mnkcq5ly-Nr-kHMh0f05WwzzVtuO3Q&maxResults=3"
   
       $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var result= response;
        var vidId=result.items[0].id.videoId;
        var object='<iframe src =\"http://www.youtube.com/embed/' +vidId+ '\"></iframe>';
        $("#results").append(object);
      })
    })
}) 