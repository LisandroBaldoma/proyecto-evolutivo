import logo from './logo.svg';
import './App.css';
//import ComponentA from './components/container/ComponentA';
import Clock from './components/container/Clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<ComponentA></ComponentA> EJERCICIOS SESIONES 1,2 Y 3*/}
        {/*EJERCICIOS SESIONES 4,5 Y 6*/}
        <Clock></Clock>               
      </header>
    </div>
  );
}

export default App;
