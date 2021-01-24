import React, { useContext } from 'react';
import styled from 'styled-components';
import { DicesContext } from '../DicesProvider';


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

const Scoareboard = () => {
  const { GetData, setGetData } = useContext(DicesContext);
  console.log("🚀 ~ file: Scoreboard.jsx ~ line 24 ~ Scoareboard ~ GetData", GetData)

  return (
    <>
      <h2>Scoreboard</h2>
      <Table>
        <thead>
          <tr>
            <th>Rules</th>
            <th>Kraen</th>
            <th>Line</th>
            <th>Jens</th>
            <th>Gitte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Enere</td>
          </tr>
          <tr>
            <td>Toere</td>
          </tr>
          <tr>
            <td>Trere</td>
          </tr>
          <tr>
            <td>firere</td>
          </tr>
          <tr>
            <td>Temmere</td>
          </tr>
          <tr>
            <td>Seksere</td>
          </tr>
          <tr>
            <td>Sum</td>
          </tr>
          <tr>
            <td>Bonus</td>
          </tr>
          <tr>
            <td>1 Par</td>
          </tr>
          <tr>
            <td>2 Par</td>
          </tr>
          <tr>
            <td>3 Par</td>
          </tr>
          <tr>
            <td>3 Ens</td>
          </tr>
          <tr>
            <td>4 Ens</td>
          </tr>
          <tr>
            <td>2 x 3 Ens</td>
          </tr>
          <tr>
            <td>Lille Straight 1-2-3-4-5</td>
          </tr>
          <tr>
            <td>Store Straight 2-3-4-5-6</td>
          </tr>
          <tr>
            <td>Royale 1-2-3-4-5-6</td>
          </tr>
          <tr>
            <td>Hus - 3 og 2 ens</td>
          </tr>
          <tr>
            <td>Chancen</td>
          </tr>
          <tr>
            <td>Yatzy 50 p - 6 ens</td>
          </tr>
          <tr>
            <td>+ Øjnene ekstra</td>
          </tr>
          <tr>
            <td>Sum</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Scoareboard;