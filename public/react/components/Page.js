import React, { useState, useEffect } from 'react';
import {PageComp} from './PageComp.js'
import apiURL from '../api';

export const Page = (props) => {

const [page,setPage]=useState({})

	// // async function fetchPage(slug){
	// 	try {
	// 		const response = await fetch(`${apiURL}/wiki/${slug}`);
	// 		const pageData = await response.json();
	// 		setPage(pageData);
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// // }

  const fetchPage =async (slug) =>{
		try {
			const response = await fetch(`${apiURL}/wiki/${slug}`);
			const pageData = await response.json();
			setPage(pageData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}

  }
  // useEffect(() => {
	// 	fetchPage();
	// }, []);

if (page)   return (
   <PageComp wikipage={page}/> ); else return  (<>
   <p>{props.page.slug}</p>
    <h3 onClick={()=>  fetchPage (props.page.slug)}>{props.page.title}</h3>
    <p>{props.page.content}</p>
  </>)
} 
	