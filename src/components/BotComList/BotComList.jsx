import BotCompany from '../BotCompany';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StyledBotComList = styled.div` 

ul {
	width: 100vw;
	height: 200px;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: 1fr;
	list-style: none;
	gap: 10px;
	padding: 10px;
}
`



function BotComList() {
	  const [names, setNames] = useState(null);
	  useEffect(() => {
		const getNames = async() => {
			const {data} = await axios.get('http://localhost:5000/names/10')
			setNames(data);
		}
		if (names) return;
		getNames();
		

	  }, []);
  return (
   <StyledBotComList>
	<ul>
		{names && names.map((name, idx) => {
			return <BotCompany name={name} key={idx} description="null" />
		})
		} 
	</ul>
	</StyledBotComList>
  );
}

const botCompanies = [
	{ name: "dfsdf", description: 'This is company 1' },
	{ name: "sdfsdf", description: 'This is company 2' },
	{ name: "sdfsdf", description: 'This is company 3' },
	{ name: "dsfsdf", description: 'This is company 4' },
	{ name: "sdfsdf", description: 'This is company 5' },
	{ name: "dsf", description: 'This is company 6' },
];

/* const readTextFile = (file) => {
	const textContent = readFileSync(file, 'utf-8');
	

	const arr = textContent.split(/\r?\n/);
	return arr;
} */

/* const generateRandIndustry = () => {
	const txtFileDir = './industries.txt';
	const industries = readTextFile(txtFileDir);
	console.log(industries, 'industries');
	const randIndustry = industries[Math.floor(Math.random()*industries.length)];
	return randIndustry;
} */

/* const generateRandName = () => {
	const txtFileDir = './names.txt';
	const names = readTextFile(txtFileDir);
	const randName = names[Math.floor(Math.random()*names.length)];
	return randName;
} */

/* const generateRandSuffix = () => {
	const txtFileDir = './business-Suffixes.txt';
	const suffix = readTextFile(txtFileDir);
	const randSuffix = suffix[Math.floor(Math.random()*suffix.length)];
	return randSuffix;
} */

/* const generateCompanyName = () => {
	const industry = generateRandIndustry();
	const name = generateRandName();
	const suffix = generateRandSuffix();
	const companyName = `${name}'s ${industry} ${suffix}`;
	console.log(companyName);
} */

export default BotComList;
