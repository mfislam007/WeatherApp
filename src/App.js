import './App.css';
import Forecast from './components/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>Page created by Md Farukul Islam</footer>
    </div>
  );
}

export default App;
