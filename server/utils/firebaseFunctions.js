const express = require('express');
const cors = require('cors');
const app = express()
const { db } = require("../config/firebaseConfig")

const botComCollectionRef = db.collection("botCompanies")

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

module.exports = { storeBotCompany, deleteBotCompany, getAllBotCompanies, deleteAllBotCompanies };