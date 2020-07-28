const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: true })); //accept string, objects, arrays
app.use(express.json());

require('./routes/searchAPI')(app);

app.get('/', (req, res) => {
	res.send('PORT 3002');
})


app.listen(port, (err) => {
	if (err) { console.log(err) };
	console.log('Listening on port ' + port);
})