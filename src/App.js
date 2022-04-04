import './style/App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>
          Boilerplate for React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
