import {memo, useContext, useState } from 'react';
import Cards from '../Cards/Cards';
import "./Deck.css";
import "../../App.css"
import { DeckContext } from '../../Context/DeckContext';

const Deck = () => {
    // eslint-disable-next-line
    const[isButtonEnabled, setIsButtonEnabled] = useState(true)
    const {cards, addCard,success,rotate} = useContext(DeckContext)
    function handleClick(){
        if(cards.length <= 7 ){
            addCard()
        }
        else{
            alert("Voce atingiu o limite de cartas")
            setIsButtonEnabled(false) 
        }
    }
    if (!success) {
        alert('Deck Get Empty !!!!!!!!!')
    }
    console.log(cards)
    return (
        <div className="Deck">
            <h1 className='Deck-title'>🔶Deck Of Cards🔶</h1>
            <button onClick={handleClick} >Puxe uma carta!!</button>
            <div className='Deck-cardarea'>
                {cards && cards.map((m, idx) => <Cards src={m.image} key={idx} alt={m.code} rotate={rotate[idx]} />)}
            </div>


        </div>
    )
}


export default memo(Deck)