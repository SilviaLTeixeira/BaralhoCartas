
import { useContext, useEffect } from 'react';
import './style.css'
import '../../App.css'
import { Link } from 'react-router-dom';
import { NameContext } from '../../Context/NameContext';
import { DeckContext}  from '../../Context/DeckContext';


function Home(){
    const{setName} = useContext(NameContext)
    const{startDeck,getData,id} = useContext(DeckContext)
     
    useEffect(() => {
        async function start(){
            if(!id){
            getData()
            }
            startDeck() 
        }
        start()
    // eslint-disable-nextline
    },[id])
    return(
        <form>
        <div className='login-container'>
        <h1 className='Deck-title'>🔶Deck Of Cards🔶</h1>
        <input 
        className="login-input"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="container-btn">
                <Link to="/gamepage">
                    <button className="btn">Ver cartas</button>
                </Link>
            </div>
        </form>
    )
}
export default Home;