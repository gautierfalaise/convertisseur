import './App.css';
import Currencies from "./Currencies/Currencies"
import data from "./data/data"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Converter</h1>
        <h2>1 euro</h2>
      </header>
      <Currencies test={1} data={data} />
    </div>
  );
}

export default App;


