'use strict';

var app = angular.module("nasaApp", ['angularUtils.directives.dirPagination'])

app.controller("NasaController", function($scope, $http) 
{
	// Credentials
	var api_key = "a5e95177da353f58113fd60296e1d250";
    var user_id = "24662369@N07";

    // Flickr API call
    $http.get("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" + api_key + "&user_id=" + user_id + "&format=json&nojsoncallback=1").
    then(function(response) 
    {
        $scope.content = response.data.photos.photo;
    }).
    catch(function(e) 
    {
    	throw e;
    });
});

function enlarge(source)
{
    document.getElementById('myModal').style.display = "block";
    document.getElementById("enlargedImage").src = source;
    document.body.style.overflow = 'hidden';
}

function reframe()
{
    document.getElementById('myModal').style.display = "none";
     document.body.style.overflow = 'auto';
}