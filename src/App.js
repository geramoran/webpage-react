import logo from './logo.svg';
import './App.css';
import TercerComponent from './components/TercerComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola</p>

        <TercerComponent></TercerComponent>
      </header>
    </div>
  );
}

export default App;
