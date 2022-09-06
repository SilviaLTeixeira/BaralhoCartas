import axios from "axios";
import { createContext, ReactNode, useState } from "react";


interface DeckContextData {
   cards: Card[],
   startDeck : () => void,
   addCard : () => void, 
   success: boolean,
   rotate: Number[],
   getData: () => void,
   id: string,

}

interface DeckProviderProps {
    children: ReactNode;
    
}

interface Card {

    image: string,
    value: string,
    suit:  string,
    code:  string,
}



export const DeckContext = createContext({} as DeckContextData);

export function DeckProvider({children}: DeckProviderProps) {

    const [id, setId] = useState("")
    const [cards, setCards] = useState([] as Card[])
    const [success, setSuccess] = useState(true)
    const [rotate, setRotate] = useState([] as Number[])

    function rand() {
        return Math.floor(Math.random() * 360 + 1);
    }

   
    async function getData() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
        let data = res.data;
        setId(data.deck_id)
    }
    
    async function startDeck() {
        let card = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=5`)
        setCards([...cards, ...card.data.cards])
        setRotate([...rotate, rand()])
        setSuccess(card.data.success)
    }

    async function addCard() {
        let card = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw`)
        setCards([...cards, ...card.data.cards])
        setRotate([...rotate, rand()])
        setSuccess(card.data.success)
    }
    

    return (
        <DeckContext.Provider value={{
            cards,
            startDeck,
            addCard,
            success,
            rotate,
            getData,
            id,
            
        }}>
            {children}
        </DeckContext.Provider>
    )
}