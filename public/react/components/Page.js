import React, {useState, useEffect} from 'react';
import { PageComp } from "./PageComp"

import apiURL from '../api';

export const Page = ({page,fetchPage}) => {
  console.log(page)



  // if (Object.entries(page).length > 0 ) return (
 
  //   <PageComp wikipage={page}/> ); else 
    
    return (<>
    <h3 onClick={() => fetchPage (page.slug)}>{page.title}</h3>
    {/* <p>{props.page.content}</p> */}
  </>)
} 









