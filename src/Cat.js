import { useState } from "react";

export default function Cat(){
    const [catImage, setCatImage] = useState('');

    async function getCatImage() {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        console.log(data[0].url);
        setCatImage(data[0].url);
      }


    return(
        <div>
        <h1>My Cat Image</h1>
        <img src={catImage} alt="cat" />
        <button onClick={getCatImage}>getCatImage</button>
      </div>
    )
}