var Twitter = require('twitter');
var twitterKeys = require('./keys.js').twitterKeys;

var spotify = require('spotify');

var thingToDo = process.argv[2];

if (thingToDo == 'my-tweets'){

    console.log("this is where my tweets should be")

    var client = new Twitter(twitterKeys);

    var params = {screen_name: 'lazaroc', count: 3};

    client.get('statuses/user_timeline', params, function(err, data) {
        for (var i = 0; i < data.length ; i++)
        {
            console.log(data[i].text);
        }
    });

}else if(thingToDo == 'spotify-this-song'){
    console.log('looking up info on your track');
}else if(thingToDo == 'movie-this'){
    console.log('movie');
}else if(thingToDo == 'do-what-it-says'){
    console.log('dooo');
}