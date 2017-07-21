var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))
//set the port of the application
//process.env.PORT lets the port be set by HEroku
var port = process.env.PORT || 8080;

//set the view engine to ejs
app.set('view engine', 'ejs');

//set the home page route
app.get('/', function(req,res){
	//ejs render automatically looks in the folder
	res.sendfile('./public/index.html');

});

app.listen(port, function(){
	console.log("Application is running on http://localhost: " +port);
})