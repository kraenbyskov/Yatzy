import styled from "styled-components";
import Dices from "./components/dice/Dices";

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
`

function App() {
  return (
    <div className="App">
      <h1>Yatzy</h1>
      <Dices />


      <h2>Scoreboard</h2>
      <Table>
        <tr>
          <th>Rules</th>
          <th>Kraen</th>
          <th>Line</th>
          <th>Jens</th>
          <th>Gitte</th>
        </tr>
        <tr>
          <td>
            Enere
          </td>
          <td></td>
        </tr>
        <tr>Toere</tr>
        <tr>Trere</tr>
        <tr>firere</tr>
        <tr>Temmere</tr>
        <tr>Seksere</tr>
        <tr>Sum</tr>
        <tr>Bonus</tr>
        <tr>1 Par</tr>
        <tr>2 Par</tr>
        <tr>3 Par</tr>
        <tr>3 Ens</tr>
        <tr>4 Ens</tr>
        <tr>2 x 3 Ens</tr>
        <tr>Lille Straight 1-2-3-4-5</tr>
        <tr>Store Straight 2-3-4-5-6</tr>
        <tr>Royale 1-2-3-4-5-6</tr>
        <tr>Hus - 3 og 2 ens</tr>
        <tr>Chancen</tr>
        <tr>Yatzy 50 p - 6 ens</tr>
        <tr>+ Øjnene ekstra</tr>
        <tr>Sum</tr>
      </Table>
    </div>
  );
}

export default App;
