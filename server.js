var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.listen(3000,'127.0.0.1', function() {
	console.log('Server running at http://localhost:3000');
});
