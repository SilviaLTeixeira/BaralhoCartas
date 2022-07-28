import React, { memo } from 'react';
import "./Cards.css";

const Card = (props: {rotate: Number, src: string, alt : string}) => {

  let deg = `${props.rotate}deg`
      let Styles ={transform:`rotate(${deg})`};
    return <img style={Styles} className='Card' src={props.src} alt={props.alt} />;

}


export default memo(Card)