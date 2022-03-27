import { useState } from "react";
import "./Item.css";

//itemin icine props.card diye de cagirabiliriz!
const Item = ({card}) => {
  //bu kismi logouyu goster veya gosterme seklinde yapmak icin kullaniyoruz.
  const [showLogo, setShowLogo]= useState(true);

  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
      /* bastigimizda yazinin donmesi icin tekrar bir divin icine almak zorundasin! */
      <div>
      <img  className="card-logo" src={card.img} alt="logo" />
      <h3 className="card-title">{card.name} </h3>
      </div>
      )  : (
      <ul className="list">
      {card.options.map((element, index)=>{
        return <li key={index}>{element}</li>
      })}
      </ul>
      )}
    </div>
  )
}

export default Item