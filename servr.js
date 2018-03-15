const express = require('express');
const app = express();

app.get('/',function (req, res) {

	res.sendFile(__dirname+ "/public/clock.html")
	// body...
}).listen(4000)

console.log('server now listening to localhost:4000')