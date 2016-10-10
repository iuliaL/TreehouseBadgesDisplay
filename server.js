var express = require('express');
var app = express();

app.use('/', express.static( __dirname+ '/public'));

app.listen(3000,'127.0.0.1', function() {
	console.log('Server running at http://localhost:3000');
});
