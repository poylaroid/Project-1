
$(document).ready(function () {
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        var artistName = $("#search-term").val();
        console.log(artistName)
        $(".artist-name").append(artistName);

        var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"
        var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"
        var queryURL3 = "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"

        //artistBio AJAX call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var result = response;
            var artistObject = (result.artist.bio.content);
            $("#artistResult").append(artistObject);
            console.log("This");
        })

        //artistAlbum AJAX call
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            var albumResult = response;
            console.log(response);
            var albumObject = (albumResult.topalbums.album[0].name);
            var albumImage = (albumResult.topalbums.album[0].image[1]["#text"]);
            var albumObject2 = (albumResult.topalbums.album[1].name);
            var albumObject3 = (albumResult.topalbums.album[2].name);
            var albumObject4 = (albumResult.topalbums.album[3].name);
            var albumObject5 = (albumResult.topalbums.album[4].name);
            
            $("#albumResults").append(albumObject + albumImage + "<br>" + albumObject2 + "<br>" + albumObject3 + "<br>" + albumObject4 + "<br>" + albumObject5);
            console.log("This");
        })

        $.ajax({
            url: queryURL3,
            method: "GET"
        }).then(function (response) {
            var similarResult = response;
            var similarObject = (similarResult.similarartists.artist[0].name);
            var similarObject2 = (similarResult.similarartists.artist[1].name);
            var similarObject3 = (similarResult.similarartists.artist[2].name);
            var similarObject4 = (similarResult.similarartists.artist[3].name);
            var similarObject5 = (similarResult.similarartists.artist[4].name);
            console.log(response);
            $("#similarResults").append(similarObject + "<br>" + similarObject2 + "<br>" + similarObject3 + "<br>" + similarObject4 + "<br>" + similarObject5);
            console.log("This");
        })

    })
})

//artist getInfo
//method2
//artistAlbums
//playbyLocation
//similarArtist



