const express = require('express');
const cors = require('cors');
const app = express()

const personNames = require('../jsonFiles/names.json');
const industires = require('../jsonFiles/industries.json');
const suffix = require('../jsonFiles/business-Suffixes.json');

const firebaseFunctions = require("./firebaseFunctions")


// Gets a random name from the json file
const generateRandName = () => {
	const randName = (personNames.names[Math.floor(Math.random()*personNames.names.length)]);
	return randName;
}

// Gets a random industry from the json file
const generateRandIndustry = () => {
	const randName = (industires.names[Math.floor(Math.random()*industires.names.length)]);
	return randName;
}

// Gets a random suffix from the json file
const generateRandSuffix = () => {
	const randName = (suffix.names[Math.floor(Math.random()*suffix.names.length)]);
	return randName;
}

// Generates a new company name
const generateCompanyName = () => {
	const name = generateRandName();
	const industry = generateRandIndustry();
	const suffix = generateRandSuffix();

	const companyName = `${name}'s ${industry} ${suffix}`;
	console.log(companyName, "name generated")
	return companyName
}

// Generates the current date
const generateNewDate = () => {
	const newDate = new Date().getTime()
	return newDate
}

// Generates a random id
const generateId = () => {
	const newDate = generateNewDate()
	const rndNum = Math.floor(Math.random() * 100000);
	const id = `${newDate}${rndNum}`
	return id
}

const generateDN = (id) => {
	const cId = id.slice(-3)
	console.log(cId)
	const maxDetermination = 1000
	const minDetermination = -1000
	const dn = genRandNum(minDetermination, maxDetermination)
	return dn
}

// Generates a random number between min and max
const genRandNum = (min, max) => {
	return Math.floor(Math.random() * (max - min +1) + min)
}

// Generates a random number of shares
const generateShares = () => {
	const availableShares = 10_000_000
	const sharesOnMarket = genRandNum(1000, availableShares);
	console.log(sharesOnMarket, "sharesonmarket")
	return sharesOnMarket
}

// Generates a random stock price
const generateStockPrice = () => {
	const stockPrice = genRandNum(0.001, 1000);
	return stockPrice
}

// Generates a random color
const generateRandomColor = () => {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	return randomColor
}

// Gets total number of companies in the database
const getNumberOfCompanies = async() => {
 const  allBotCompanies = await firebaseFunctions.getAllBotCompanies()
 return allBotCompanies.length
}

const generateIdenticon = (companyId) => {
	const imageApiIdx = genRandNum(0, 3)
	const imageId = companyId
	const imageSize = 128
	let imageUrl = ``
	switch(imageApiIdx) {
		case 0:
			imageUrl = `https://source.boringavatars.com/bauhaus/${imageSize}/${imageId}?colors=${generateRandomColor()},${generateRandomColor()},${generateRandomColor()}`
		  break;
		case 1:
			imageUrl = `https://source.boringavatars.com/beam/${imageSize}/${imageId}?colors=${generateRandomColor()},${generateRandomColor()},${generateRandomColor()}`
		  break;
		case 2:
			imageUrl = `https://source.boringavatars.com/pixel/${imageSize}/${imageId}?colors=${generateRandomColor()},${generateRandomColor()},${generateRandomColor()}`
			break;
		default:
			imageUrl = `https://source.boringavatars.com/pixel/${imageSize}/${imageId}?colors=${generateRandomColor()},${generateRandomColor()},${generateRandomColor()}`
			break;
	 }
	
	return imageUrl
}

// Generates a new company
const generateNewCompany = () => {
	const newCompany = [];
	const newCompanyName = generateCompanyName();
	const dateFounded = generateNewDate()
	const id = generateId()
	const stockPrice = generateStockPrice()
	const availableShares = generateShares()
	const netValue = stockPrice * availableShares
	const companyLogo = generateIdenticon(id)
	const companyDeterminationNumber = generateDN(id)

	newCompany.push({
		id: id,
		companyName: newCompanyName,
		dateFounded: dateFounded,
		availableShares: availableShares,
		stockPrice: stockPrice,
		netValue: netValue,
		companyLogo: companyLogo,
		bankrupt: false,
		CDN: companyDeterminationNumber
	});
	console.log("sending to firebaseFunction", newCompany)
	firebaseFunctions.storeBotCompany(newCompany);
}

/* generateNewCompany(); */
/* firebaseFunctions.deleteBotCompany("*") */
/* firebaseFunctions.getAllBotCompanies() */
/* getNumberOfCompanies() */
/* firebaseFunctions.deleteAllBotCompanies() */

module.exports = {generateNewCompany,
	getNumberOfCompanies,
	generateNewDate,
	generateId,
	generateShares,
	generateStockPrice,
	generateRandomColor,
	generateIdenticon,
	generateRandName,
	generateRandIndustry,
	generateRandSuffix,
	generateCompanyName};