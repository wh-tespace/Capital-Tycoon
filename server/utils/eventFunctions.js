const express = require('express');
const cors = require('cors');
const app = express()

const firebaseFunctions = require("./firebaseFunctions")
const functions = require("./functions")

const generateNewEvent = (eventIsGood) => {
	const eventGood = eventIsGood || false
	const event = {
		id: functions.generateId(),
		eventEnabled: true,
		eventName: "Bankrupt",
		eventText: "Company goes bankrupt",
		eventMinStockChange: 100,
		eventMaxStockChange: 100,
	}
	firebaseFunctions.storeBotComEvents(event, eventGood);
}

module.exports = { generateNewEvent };

