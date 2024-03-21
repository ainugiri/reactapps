import { useState } from "react";
export default function Joke(){

  const [joke, setJoke] = useState('');
  async function getJoke() {
    // https://dev.to/mukeshkuiry/12-free-and-fun-api-for-your-next-project-5eem   
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    console.log(data.setup);
    setJoke(data.setup + ' ' + data.delivery);
  }



  return(
    <div>
      <h1>Jokes</h1>
      <h3>{joke}</h3>
      <button onClick={getJoke}>getJoke</button>
    </div>
  )
}