import Cat from "./Cat";
import Joke from "./Joke";
import Advice from "./Advice";
export default function App(){

  return(
    <>
      <div class="header">
          <h1>State</h1>
          
      </div>
      <div id="container">
      <div class="sections__container">
        <Cat class="sections__container__a"/>
        <Advice class="sections__container__b"/>  
        <Joke class="sections__container__c"/>
      </div>
    </div>
    </>

  )
}