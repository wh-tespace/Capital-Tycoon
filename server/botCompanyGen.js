const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const { generateNewCompany, getNumberOfCompanies } = require('./utils/functions.js');
const { getAllBotCompanies } = require('./utils/firebaseFunctions.js');
const { generateNewEvent } = require("./utils/eventFunctions.js");

const app = express();
app.use(cors());

let checkAndGenerateCom = cron.schedule('* */5 * * * *', async() => {
	console.log('running a task every 15th minute');
	const numberOfCompanies = await getNumberOfCompanies()
	console.log(numberOfCompanies, "number of companies")
	if (numberOfCompanies < 50) {
		generateNewCompany()
		console.log("generating new company test")
	} else {
		console.log("Max number of companies reached")
		checkAndGenerateCom.stop()
	}
 });

app.get('/invest', async(req, res) => {
	console.log("Investing")
	let allCompanies = await getAllBotCompanies()
	generateNewEvent(false)
	return res.json(allCompanies)
});

/* app.get('/names/:count', (req, res) => {
  const count = req.params.count;

  console.log(count, 'count');

	const namesArr = names.names.slice(0, count);
	console.log(namesArr, 'namesArr');
	return res.json(namesArr);
}); */

app.get('/addEventBad', (req, res) => {
	console.log("GenerateNewEvent")
	
 });

 app.get('/business-Suffixes/:count', (req, res) => {
	res.send('Hello World!');
 });

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});