import { useState } from "react";

function APICatAsyncAwait() {

  const [catFact, setCatFact] = useState('');
  

  // async : return Promise
  async function fetchCatFact() {
    const promiseCat = fetch('https://catfact.ninja/fact')
    return promiseCat;
  }

  async function getCatFact() {

    // then이 try 안으로 들어감
    try{
      const response = await fetchCatFact();
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const responseData = await response.json();
      setCatFact(responseData.fact);
    } catch(error) {
      setCatFact(error.message);

    } finally{
      console.log('done');
    }
  }
  


  return (
    <>
      <h1>This is APICat Promise pages</h1>
      <li>This page use free API</li>
      <li>In this page for fetching API, use modern style 'async and await'</li>
      <div>{catFact}</div>
      <button onClick = {getCatFact} >Get Cat Fact</button>
    </>
  );
}

export default APICatAsyncAwait;