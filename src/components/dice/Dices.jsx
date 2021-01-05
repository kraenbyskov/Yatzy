import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


const DiceStyle = styled.div`
border:2px solid black;
display:inline-flex;
justify-content:center;
align-items:center;
border-radius:5px;
width:30px;
height:30px;
margin:5px;
background-color: ${props => props.Hold ? `green` : `white`};
cursor:pointer;
`


const Dice = ({ rolls }) => {
    const [Hold, setHold] = useState(false)
    const [roll, setroll] = useState(rolls)

    useEffect(() => {
        Hold ? setroll(roll) : setroll(rolls)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rolls, roll])
    return (
        <DiceStyle Hold={Hold} onClick={() => (setHold(!Hold))}>{roll}</DiceStyle>
    )

}


const Dices = () => {
    const [rolls, setrolls] = useState([0])
    const [rollSum, setrollSum] = useState(0)

    const diceRoll = () => {
        let rolls = [];
        let rollSum = 0;
        for (let i = 0; i < 6; i++) {
            rolls[i] = Math.floor(Math.random() * 6) + 1;
            rollSum += rolls[i];
        }
        setrolls(rolls)
        setrollSum(rollSum)

    };


    return (
        <>
            <button onClick={diceRoll}>Rolle Dice</button>
            {rolls.map((rolls) => (
                <Dice rolls={rolls} />
            ))}

            <p>Totalt {rollSum}</p>
        </>
    );
}

export default Dices;