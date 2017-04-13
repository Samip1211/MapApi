var express = require('express');
var app = express();

//var http = require("requestify");
app.get('/',function(req,res){
	res.end("Hello")
})
app.get('/listUsers', function (req, res) {
	/*var reponseObject;
	http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ_UypeeMuTIYRGtrKERCRj2U&key=AIzaSyAQvpmdy7gi3VVH	uG0hnR0dRaU31MjtQas").then(function(response) {
	    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
	    console.log(response.getBody());
		res.end(response.body);
	    // Get the response raw body
	    console.log(response.body);
		
	});*/
	
})

var server = app.listen(process.env.PORT, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})/*
http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ_UypeeMuTIYRGtrKERCRj2U&key=AIzaSyAQvpmdy7gi3VVHuG0hnR0dRaU31MjtQas").then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
    console.log(response.getBody());
	
    // Get the response raw body
    console.log(response.body);
});*/
