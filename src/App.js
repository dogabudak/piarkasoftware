import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Piarka Software is coming to our earth...
        <a
          className="App-link"
          href="http://www.dogabudak.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        Doga Budak
        </a>
      </header>
    </div>
  );
}

export default App;
