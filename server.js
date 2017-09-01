var express = require('express');
var app = express();
var cacheResonponseDirective = require('express-cache-response-directive');
var port = process.env.PORT || 3334;
var timers = 0;


app.use(cacheResonponseDirective());

app.use(function(req, res, next){
	var change = req.query.change;
	//var oddChange = req.query['odd-change'];

	if(change === '1'){
		timers++;
	}

	// 如果带了 odd-change=1，那么，奇数次访问时，资源是新的
	//if(oddChange === '1' && (++oddVisitCount%2 === 1)){
	//	timers++;
	//}

	next();
});

app.get('/no-cache', function(req, res, next){
	res.cacheControl("no-cache");
	res.send('Jay is setting the cache rules to no-cache ' + timers);
});

app.get('/no-store', function(req, res, next){
	res.cacheControl({'no-store': true});
	res.send('Jay is setting the cache rules to no-store ' + timers);
});

app.get('/must-revalidate', function(req, res, next){
	res.cacheControl({maxAge: 10, 'must-revalidate': true});
	res.send('Jay is setting the cache rules to must-revalidate ' + timers);
});

app.listen(port, function(){
	console.log("Server is started listening to port: " + port);
});