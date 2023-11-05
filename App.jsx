import {CORE_CONCEPTS} from "./data.js"
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function handleClick(){
  console.log("Hello World -Clicked");
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core-consepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>
        <section id="examples">
        <h2> Examples </h2>
        <menu>
        <TabButton label = 'Components' onClick ={handleClick} >  </TabButton>
        <TabButton label = 'JSX' >  </TabButton>
        <TabButton label = 'Props' >  </TabButton>
        <TabButton label = 'State' >  </TabButton>
        </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
