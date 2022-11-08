const express = require('express');
const cors = require('cors');

const names = require('./jsonFiles/names.json');
/* console.log(names , 'names'); */
const app = express();
app.use(cors());

app.get('/names/:count', (req, res) => {
  const count = req.params.count;

  console.log(count, 'count');

	const namesArr = names.names.slice(0, count);
	console.log(namesArr, 'namesArr');
	return res.json(namesArr);
});

app.get('/industries/:count', (req, res) => {
	res.send('Hello World!');
 });

 app.get('/business-Suffixes/:count', (req, res) => {
	res.send('Hello World!');
 });

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});