import { useState } from "react";
export default function Advice(){

  const [advice, setAdvice] = useState('');
  async function getAdvice() {
    // https://dev.to/mukeshkuiry/12-free-and-fun-api-for-your-next-project-5eem   
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
  }



  return(
    <div>
      <h1>Advice</h1>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>getAdvice</button>
    </div>
  )
}