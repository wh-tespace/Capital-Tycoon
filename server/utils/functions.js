const express = require('express');
const cors = require('cors');
const FirebaseBotCompany = require("../config/firebaseConfig")
const app = express()
app.use(express.json())
app.use(cors())

const personNames = require('../jsonFiles/names.json');
const industires = require('../jsonFiles/industries.json');
const suffix = require('../jsonFiles/business-Suffixes.json');

const storeBotCompany = (botCompany) => {
	app.post('/create/', async (req, res) => {
		const data = req.body;
		console.log("Data of users", data)
		await FirebaseBotCompany.add(data);
		res.send({ message: 'success botCompany added' });
	});
}

const generateRandName = () => {
	const randName = (personNames.names[Math.floor(Math.random()*personNames.names.length)]);
	return randName;
}

const generateRandIndustry = () => {
	const randName = (industires.names[Math.floor(Math.random()*industires.names.length)]);
	return randName;
}

const generateRandSuffix = () => {
	const randName = (suffix.names[Math.floor(Math.random()*suffix.names.length)]);
	return randName;
}

const generateCompanyName = () => {
	const name = generateRandName();
	const industry = generateRandIndustry();
	const suffix = generateRandSuffix();

	const companyName = `${name}'s ${industry} ${suffix}`;
	console.log(companyName, "nameeee")
	return companyName
}

const generateNewCompany = () => {
	const newCompany = [];
	const newCompanyName = generateCompanyName();

	newCompany.push({ cName: newCompanyName });
	storeBotCompany(newCompany);
}

generateNewCompany();

module.exports = { generateNewCompany };