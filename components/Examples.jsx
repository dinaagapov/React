import TabButton from './TabButton.jsx';
import { useState  } from 'react';
import {EXAMPLES} from '../data.js'
import Section from './Sections.jsx';
import Tabs from './Tabs.jsx'

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();


    function handleClick(selectedButton){
      setSelectedTopic(selectedButton);
      // console.log(selectedTopic); selectedTopic will be the old value, 
      //it changes to the new value only after all function has been completed
    
    }
  
    let tabContent =  !selectedTopic ? <p> 'Please select a topic.'</p>:
    <div id ="tab-content">
      <h3>{EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
        <code> {EXAMPLES[selectedTopic].code} </code>
      </pre>
    </div>  
  

    return( 
    <Section title = "Examples" className="examples"  id ="examples"  >
    <Tabs buttons={
      <>
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
    </>}> {tabContent} 
    </Tabs>
    </Section>);
}