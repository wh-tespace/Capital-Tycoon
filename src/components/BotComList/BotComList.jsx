import BotCompany from './BotCompany/BotCompany';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import "./botComList.css";

function BotComList() {
	const names = botCompanies
	console.log(names, "names")
return (

	<ul className="botComList">
		{
			names.map((name, description, idx) => {
			return <BotCompany name={name.name} key={idx} description={description.description} />
		})
		} 
	</ul>
  );
}

const getNames = async() => {
	/* const {data} = await axios.get('http://localhost:5000/names/') */
	const hello = [{name: "test"}]
	return hello
}

const botCompanies = [
	{ name: "dfsdf", description: 'This is company 1' },
	{ name: "sdfsdf", description: 'This is company 2' },
	{ name: "sdfsdf", description: 'This is company 3' },
	{ name: "dsfsdf", description: 'This is company 4' },
	{ name: "sdfsdf", description: 'This is company 5' },
	{ name: "dsf", description: 'This is company 6' },
];

export default BotComList;
