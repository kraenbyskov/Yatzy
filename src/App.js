import Dices from "./components/dice/Dices";
import { DicesProvider } from "./components/DicesProvider";
import Scoareboard from "./components/Scoreboard/Scoreboard";



function App() {
  const NumberOfDices = 6;
  return (
    <div className="App">
      <DicesProvider NumberOfDices={NumberOfDices}>
        <h1>Yatzy</h1>
        <Dices NumberOfDices={NumberOfDices} />
        <Scoareboard />

      </DicesProvider>
    </div>
  );
}

export default App;
