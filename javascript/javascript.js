
$(document).ready(function () {
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        var artistName = $("#search-term").val();
        console.log(artistName)
        $(".artist-name").append(artistName);

        var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"
        var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.getalbuminfo&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"
        var queryURL3 = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"
        var queryURL4 = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=acd7fd0fc6f286de62a8ee2d0e69885f&format=json"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var result = response;
            var object1 = (result.artist.bio.content);
            $("#results1").append(object1);
            console.log("This" + object1);
        })
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var result2 = response;
            $("#results2").append(object2);
        })
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var result3 = response;
            $("#results3").append(object3);
        })
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var result4 = response;
            $("#results4").append(object4);
        })

    })
})

//artist getInfo
//method2
//artistAlbums
//playbyLocation
//similarArtist


//function to take in switch
        //variable for artistName
        //check which method we using
        //match url to method
        //return url 


