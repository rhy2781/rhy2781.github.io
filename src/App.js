import logo from './logo.svg';
import './App.css';
import './components/About';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile">
          <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png'} className="App-logo" alt="logo" />
          <About />
        </div>
      </header>
    </div>
  );
}

export default App;
