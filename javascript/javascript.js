 
$(document).ready(function () {
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        var artistName = $("#search-term").val();
        searchArtist(artistName)
    })
   
   
  })
   
  function searchArtist(artistName) {
    $(".artist-name").html(artistName);
   console.log("searchArtist called")
    var queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"
    var queryURL2 = "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"
    var queryURL3 = "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"
   
    //artistBio AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var result = response;
        var artistObject = (result.artist.bio.content);
        $("#artistResult").html(artistObject);
        var artistImage1 = (result.artist.image[3]["#text"]);
        $("#artistImage").html("<img src=" + artistImage1 + "/>")

        
    })
   
    //artistAlbum AJAX call
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        var albumResult = response;
        //console.log(response);
        var albumObject = (albumResult.topalbums.album[0].name);
        var albumImage = (albumResult.topalbums.album[0].image[1]["#text"]);
        var albumObject2 = (albumResult.topalbums.album[1].name);
        var albumImage2 = (albumResult.topalbums.album[1].image[1]["#text"]);
        var albumObject3 = (albumResult.topalbums.album[2].name);
        var albumImage3 = (albumResult.topalbums.album[2].image[1]["#text"]);
        var albumObject4 = (albumResult.topalbums.album[3].name);
        var albumImage4 = (albumResult.topalbums.album[3].image[1]["#text"]);
        var albumObject5 = (albumResult.topalbums.album[4].name);
        var albumImage5 = (albumResult.topalbums.album[4].image[1]["#text"]);
   
        //append results to
        $("#albumResults").html("<img src=" + albumImage + "/> " + albumObject + "<br>" + "<img src=" + albumImage2 + "/> " + albumObject2 + "<br>" + "<img src=" + albumImage3 + "/> " + albumObject3 + "<br>" + "<img src=" + albumImage4 + "/> " + albumObject4 + "<br>" + "<img src=" + albumImage5 + "/> " + albumObject5 + "<br>");
        
   
    })
   
    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function (response) {
        var similarResult = response;
        var similarObject = (similarResult.similarartists.artist[0].name);
        var similarImage = (similarResult.similarartists.artist[0].image[1]["#text"]);
        var similarObject2 = (similarResult.similarartists.artist[1].name);
        var similarImage2 = (similarResult.similarartists.artist[1].image[1]["#text"]);
        var similarObject3 = (similarResult.similarartists.artist[2].name);
        var similarImage3 = (similarResult.similarartists.artist[2].image[1]["#text"]);
        var similarObject4 = (similarResult.similarartists.artist[3].name);
        var similarImage4 = (similarResult.similarartists.artist[3].image[1]["#text"]);
        var similarObject5 = (similarResult.similarartists.artist[4].name);
        var similarImage5 = (similarResult.similarartists.artist[4].image[1]["#text"]);
   
        
        $("#similarResults").html("<img onclick='searchArtist(\"" + similarObject + "\")' src=" + similarImage + "/> " + similarObject + "<br>" + "<img src=" + similarImage2 + "/> " + similarObject2 + "<br>" + "<img src=" + similarImage3 + "/> " + similarObject3 + "<br>" + "<img src=" + similarImage4 + "/> " + similarObject4 + "<br>" + "<img src=" + similarImage5 + "/> " + similarObject5 + "<br>");
        
   
    })
  }




