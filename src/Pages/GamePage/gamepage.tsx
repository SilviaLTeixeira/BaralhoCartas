import {useEffect, useState,useContext} from 'react';
import { useHistory } from 'react-router';
import './style.css'
import Card from '../../Components/Cards/Cards';
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