import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components'
import { DicesContext } from "../DicesProvider";


const DiceStyle = styled.div`
border:2px solid black;
display:inline-flex;
justify-content:center;
align-items:center;
border-radius:5px;
width:30px;
height:30px;
margin:5px;
background-color: ${props => props.Hold ? `green` : `orange`};
cursor:pointer;
`


const Dice = ({ rolls, hold }) => {
    return (
        <DiceStyle hold={hold}>{rolls}</DiceStyle>
    )

}

const diceRoll = (x, setRolls, GetData) => {
    let roll = [GetData];
    for (let i = 0; i < x; i++) {
        roll[i] = {
            Roll: Math.floor(Math.random() * x) + 1,
            hold: false
        };
    }
    setRolls(roll)
};


const Dices = ({ NumberOfDices }) => {
    const { GetData, setGetData } = useContext(DicesContext);
    return (
        <>
            <button onClick={() => diceRoll(NumberOfDices, setGetData, GetData)}>Rolle Dice</button>
            {GetData.map(({ Roll, hold, id }) => (
                <Dice rolls={Roll} hold={hold} key={id} />
            ))}

        </>
    );
}

export default Dices;