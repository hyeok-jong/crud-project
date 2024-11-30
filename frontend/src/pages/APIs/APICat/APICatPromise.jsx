import { useState } from "react";

function APICatPromise() {

  const [catFact, setCatFact] = useState('');
  

  function fetchCatFact() {
    const promiseCat = fetch('https://catfact.ninja/fact')
    return promiseCat;
  }

  function getCatFact() {
    const promiseCat = fetchCatFact();
  
    promiseCat
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json(); 
        // response.json()은 응답 데이터를 스트림으로 읽고 JSON으로 파싱하는 데 시간이 걸리기 때문에 Promise를 반환.
      })
      .then((responseData) => {
        setCatFact(responseData.fact); 
      })
      .catch((error) => {
        setCatFact(error.message); 
      })
      .finally(() => {
        console.log("done"); 
      });
  }
  


  return (
    <>
      <h1>This is APICat Promise pages</h1>
      <li>This page use free API</li>
      <li>In this page for fetching API, use old style '.then, .catch'</li>
      <div>{catFact}</div>
      <button onClick = {getCatFact} >Get Cat Fact</button>
    </>
  );
}

export default APICatPromise;