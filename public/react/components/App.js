import React, { useState, useEffect } from 'react';
import {PagesList} from './PagesList';
import {PageComp} from './PageComp';
import { Form } from './Form';


// import and prepend the api url to any fetch calls
import apiURL from '../api';

const initialInputs = {
	title: "",
	content: "",
	name: "",
	email: "",
	tags: "",
  };
export const App = () => {

	
	const [page, setPage] = useState({});
	const [data, setData] = useState(null);
	// const [isAddingPageComp, setIsAddingPageComp] = useState(false);
	const [input, setInput] = useState(initialInputs);
	const [isAddingArticle, setIsAddingArticle] = useState(false);

	const fetchPage = async (slug) =>{
		  try {
			  const response = await fetch(`${apiURL}/wiki/${slug}`);
			  const data = await response.json();
			  setPage(data);
			  // console.log(data);
		  } catch (err) {
			  console.log("Oh no an error! ", err)
		  }
	  }

	const [pages, setPages] = useState([]);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	// async function submitHandler(event) {
	// 	event.preventDefault();
	// 	const  = initialInputs;
	// 	const res = await fetch(`${apiURL}/wiki`, {
	// 	  method: "POST",
	// 	  headers: {
	// 		"Content-Type": "application/json",
	// 	  },
	// 	  body: JSON.stringify(articleData),
	// 	});
	// 	const data = await res.json();
	
	// 	await fetchPages();
	// 	setIsAddingArticle(false);
	// 	resetFields();
	//   }
	//   function resetFields() {
	// 	setInput(initialInputs);
	//   }
	
	useEffect(() => {
		fetchPages();
	}, []);

	return (
		Object.entries(page).length > 0 ? 
	<PageComp wikipage={page} setPage={setPage}/>
	:
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{!isAddingArticle ?  
			<>
				<PagesList pages={pages} fetchPage={fetchPage}/>
				<button onClick={() => setIsAddingArticle(true)}>Create a new page </button>
			</>
			
		 
			:
			<Form />}
		</main>
		
	)
}