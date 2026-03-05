import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponet';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';

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
      <Thirdcomponent/>
      <Fourthcomponent/>
    </div>
  );
}

export default App;
