const express = require('express');
const cors = require('cors');
const app = express()
const { db } = require("../config/firebaseConfig");
const { firestore } = require('firebase-admin');

const botComCollectionRef = db.collection("botCompanies")
const botComEvents = db.collection("botCompanyEvents")
const badBotComEvents = botComEvents.doc("bad")
const goodBotComEvents = botComEvents.doc("good")

const storeBotCompany = async(botCompany) => {
	const companyName = botCompany[0].companyName
	const id = botCompany[0].id
	const dateFounded = botCompany[0].dateFounded
	const availableShares = botCompany[0].availableShares
	const stockPrice = botCompany[0].stockPrice
	const netValue = botCompany[0].netValue
	const companyLogo = botCompany[0].companyLogo
	const bankRupt = botCompany[0].bankrupt
	const CDN = botCompany[0].CDN

	const data = {
		id: id,
		name: companyName,
		dateFounded: dateFounded,
		availableShares: availableShares,
		stockPrice: stockPrice,
		netValue: netValue,
		companyLogo: companyLogo,
		bankrupt: bankRupt,
		CDN: CDN
	}
	const res = await botComCollectionRef.doc(id).set(data)
}

const deleteBotCompany = async(company) => {
	const res = await botComCollectionRef.doc(company).delete()
	console.log(res, "deleted")
}

const deleteAllBotCompanies = async() => {
	const res = await botComCollectionRef.get()
	res.forEach(doc => {
		doc.ref.delete()
	})
}

const getAllBotCompanies = async() => {
	console.log("Getting all bot companies")
	const snapshot = await botComCollectionRef.get()
	return snapshot.docs.map(doc => doc.data())
}

//Events

const storeBotComEvents = async(event, eventGood) => {
	const id = event.id
	const eventEnabled = event.eventEnabled
	const eventName = event.eventName
	const eventText = event.eventText
	const eventMinStockChange = event.eventMinStockChange
	const eventMaxStockChange = event.eventMaxStockChange

	const card = {
		id: id,
		eventEnabled: eventEnabled,
		eventName: eventName,
		eventText: eventText,
		eventMinStockChange: eventMinStockChange,
		eventMaxStockChange: eventMaxStockChange
	}
	let res = null
	if (eventGood) {
		/* res = await goodBotComEvents.card.set(card) */
	} else {
		res = await badBotComEvents.update("card", firestore.FieldValue.arrayUnion(card))
		/* res = await badBotComEvents.card.set(card) */
	}
}

module.exports = { storeBotCompany, deleteBotCompany, getAllBotCompanies, deleteAllBotCompanies, storeBotComEvents };