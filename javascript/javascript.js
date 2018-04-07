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
     var queryURL4 = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + artistName + "&key=AIzaSyC30mnkcq5ly-Nr-kHMh0f05WwzzVtuO3Q&maxResults=10"
     //youtube video dynamic




     $.ajax({
         url: queryURL4,
         method: "GET"
     }).then(function (response) {
         console.log("Video" + response);
         var myresult = response;
         var vidId1 = myresult.items[8].id.videoId;
         var object1 = '<iframe width=\"85%\" height=\"100%\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" src =\"https://youtube.com/embed/' + vidId1 + '\"></iframe>';
         //console.log(object1);
         var vidId2 = myresult.items[9].id.videoId
         var object2 = '<iframe width=\"85%\" height=\"100%\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" src =\"https://youtube.com/embed/' + vidId2 + '\"></iframe>';
         //console.log(object2);
         $("#results1").html(object1);
         $("#results2").html(object2);
     })



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

         $("#albumResults").html("");
         $("#albumResults").append("<img src=" + albumImage + "/> " + "<a href='https://last.fm/search/albums?q=(\"" + albumObject + "\")'>" + albumObject + "</>" + "<br>" +
             "<img src=" + albumImage2 + "/> " + "<a href='https://last.fm/search/albums?q=(\"" + albumObject2 + "\")'>" + albumObject2 + "</>" + "<br>" + "<img src=" + albumImage3 + "/> " + "<a href='https://last.fm/search/albums?q=(\"" + albumObject3 + "\")'>" + albumObject3 + "</>" + "<br>" + "<img src=" + albumImage4 + "/> " + "<a href='https://last.fm/search/albums?q=(\"" + albumObject4 + "\")'>" + albumObject4 + "</>" + "<br>" + "<img src=" + albumImage5 + "/> " + "<a href='https://last.fm/search/albums?q=(\"" + albumObject5 + "\")'>" + albumObject5 + "</>" + "<br>");
         console.log("This");


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


         console.log(response);
         $("#similarResults").html("");
         $("#similarResults").append("<img onclick='searchArtist(\"" + similarObject + "\")' src=" + similarImage + "/> " + similarObject + "<br>" + "<img onclick='searchArtist(\"" + similarObject2 + "\")' src=" + similarImage2 + "/> " + similarObject2 + "<br>" + "<img onclick='searchArtist(\"" + similarObject3 + "\")' src=" + similarImage3 + "/> " + similarObject3 + "<br>" + "<img onclick='searchArtist(\"" + similarObject4 + "\")' src=" + similarImage4 + "/> " + similarObject4 + "<br>" + "<img onclick='searchArtist(\"" + similarObject5 + "\")' src=" + similarImage5 + "/> " + similarObject5 + "<br>");
         console.log("This");


     })




 }