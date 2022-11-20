const express = require('express');
const cors = require('cors');
const app = express()

const personNames = require('../jsonFiles/names.json');
const industires = require('../jsonFiles/industries.json');
const suffix = require('../jsonFiles/business-Suffixes.json');

const firebaseFunctions = require("./firebaseFunctions")

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
	console.log(companyName, "name generated")
	return companyName
}

const generateNewDate = () => {
	const newDate = new Date().getTime()
	return newDate
}

const generateId = () => {
	const newDate = generateNewDate()
	const rndNum = Math.floor(Math.random() * 100000);
	const id = `${newDate}${rndNum}`
	return id
}

const genRandNum = (min, max) => {
	return Math.floor(Math.random() * (max - min +1) + min)
}

const generateShares = () => {
	const availableShares = 10_000_000
	const sharesOnMarket = genRandNum(1000, availableShares);
	console.log(sharesOnMarket, "sharesonmarket")
	return sharesOnMarket
}

const generateStockPrice = () => {
	const stockPrice = genRandNum(0.1, 1000);
	return stockPrice
}

const generateRandomColor = () => {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	return randomColor
}

const generateIdenticon = (companyId) => {
	const imageApiIdx = genRandNum(0, 3)
	const imageId = companyId
	const imageSize = 128
	let imageUrl = ``
	switch(imageApiIdx) {
		case 0:
			imageUrl = `https://source.boringavatars.com/bauhaus/${imageSize}/${imageId}?colors=264653,2a9d8f,e9c46b`
		  break;
		case 1:
			imageUrl = `https://source.boringavatars.com/beam/${imageSize}/${imageId}?colors=${generateRandomColor()},${generateRandomColor()},${generateRandomColor()}`
		  break;
		case 2:
			imageUrl = `source.boringavatars.com/pixel/${imageSize}/${imageId}?colors=${generateRandomColor()},${generateRandomColor()},${generateRandomColor()}`
			break;
		default:
			imageUrl = `https://identicon-api.herokuapp.com/${imageId}/${imageSize}?format=(svg)`
			break;
	 }
	
	return imageUrl
}

const generateNewCompany = () => {
	const newCompany = [];
	const newCompanyName = generateCompanyName();
	const dateFounded = generateNewDate()
	const id = generateId()
	const stockPrice = generateStockPrice()
	const availableShares = generateShares()
	const netValue = stockPrice * availableShares
	const companyLogo = generateIdenticon(id)

	newCompany.push({
		id: id,
		companyName: newCompanyName,
		dateFounded: dateFounded,
		availableShares: availableShares,
		stockPrice: stockPrice,
		netValue: netValue,
		companyLogo: companyLogo
	});
	console.log("sending to firebaseFunction", newCompany)
	firebaseFunctions.storeBotCompany(newCompany);
}

generateNewCompany();
firebaseFunctions.deleteBotCompany("*")
module.exports = { generateNewCompany };