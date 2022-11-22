import BotCompany from './BotCompany/BotCompany';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import "./botComList.css";
function BotComList() {
	const [posts, setPosts] = useState([]);
	
	useEffect( () => { 
		 async function fetchData() {
			  try {
					const res = await axios.get('http://localhost:5000/invest/'); 
					setPosts(res.data);
					console.log(res.data, "res.data")
			  } catch (err) {
					console.log(err);
			  }
		 }
		 fetchData();
	}, []);



return (

	<ul className="botComList">
		{/*Return BotCompany component for each item in companies*/}
		{posts.map((company) => (
			<BotCompany
				company={company} />
		))}
		
	</ul>
  );
}
/* const getCompaniesFS = async() => {
	const {data} = await axios.get('http://localhost:5000/invest/')
	console.log(data, "data")
	return data
} */

export default BotComList;
