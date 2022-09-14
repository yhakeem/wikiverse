import React, {useState, useEffect} from 'react';
import { PageComp } from "./PageComp"

import apiURL from '../api';

export const Page = (props) => {
  
  const [page, setPage] = useState({});

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

	// useEffect(() => {
	// 	fetchPage();
	// }, []);

  if (Object.entries(page).length > 0 ) return (
 
    <PageComp wikipage={page}/> ); else return (<>
    <h3 onClick={() => fetchPage (props.page.slug)}>{props.page.title}</h3>
    <p>{props.page.content}</p>
  </>)
} 









