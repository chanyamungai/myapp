import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponet';
import Secondcomponent from './components/Secondcomponent';
import Contactcomponent from './components/Contactcomponent';
import Helpcomponent from './components/Helpcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning react</h1>
        <h2>React is fun</h2>
     
      </header>
      {/*Below we render/display/show our componenets*/}
      <Firstcomponent/>
      <Secondcomponent/>
      <Contactcomponent/>
      <Helpcomponent/>
      <Thirdcomponent/>
      <Fourthcomponent/>
      <Fifthcomponent/>
      
    </div>
  );
}

export default App;
