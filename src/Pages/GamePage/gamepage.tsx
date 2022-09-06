import {useContext} from 'react';
import './style.css'
import Deck from '../../Components/Deck/Deck';
import { NameContext } from '../../Context/NameContext';

const GamePage = () => {
   const {name} = useContext(NameContext)
    return(
        <>
        <h1 className='h1-gamepage'>{name}</h1>
        <Deck></Deck>
        </>
    )

}

export default GamePage