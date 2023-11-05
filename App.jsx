import {CORE_CONCEPTS,EXAMPLES} from "./data.js"
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';



function App() {
  const [selectedTopic, setSelectedTopic] = useState();


  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic); selectedTopic will be the old value, it changes to the new value only after all function has been completed
  
  }

  let tabContent =  !selectedTopic ? <p> 'Please select a topic.'</p>:
  <div id ="tab-content">
    <h3>{EXAMPLES[selectedTopic].title} </h3>
      <p> {EXAMPLES[selectedTopic].description} </p>
      <pre>
      <code> {EXAMPLES[selectedTopic].code} </code>
    </pre>
  </div>  

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core-consepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
        <h2> Examples </h2>
        <menu>
        <TabButton label = 'Components' 
        onClick ={() => handleClick('components')} 
        isClicked={selectedTopic === 'components'} >  </TabButton>
        <TabButton label = 'JSX' 
        onClick ={() => handleClick('jsx')} 
        isClicked={selectedTopic === 'jsx'} >  </TabButton>
        <TabButton label = 'Props' 
        onClick ={() => handleClick('props')} 
        isClicked={selectedTopic === 'props'} >  </TabButton>
        <TabButton label = 'State' 
        onClick ={() => handleClick('state')}  
        isClicked={selectedTopic === 'state'} >  </TabButton>
        </menu>
       {tabContent}
        </section>
      </main>
    </div>
  );
} 

export default App;
