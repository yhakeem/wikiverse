import React from 'react';
import { Page } from './Page';
import apiURL from '../api';

export const PageComp = ({wikipage,setPage}) => {


    const handleDelete= async ()=>{
        const response = await fetch(`${apiURL}/wiki/${wikipage.slug}`, {
      method: "DELETE"
    });
    const data = await response.json();
     setPage({});
    }


	
	(wikipage ? console.log(wikipage) : null);


	return <>
		{
		Object.entries(wikipage).length > 0 ? 	
			<div>
				<h2>{wikipage.title}</h2>
				<p><strong>Author:</strong>{wikipage.author?.name}</p>
				<p>{wikipage.content}</p>
				<p><strong>Tags:</strong></p>
				{wikipage.tags.map((tag, idx) => (<p key={idx}>{tag.name}</p>))}
                <button onClick={()=>setPage({})}>Back To Wiki List</button>
                <button onClick={handleDelete}>Delete A Page </button>
			</div>
		: null
		}


	</>
} 



//try then 





















