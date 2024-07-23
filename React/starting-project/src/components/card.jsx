import './../assets/css/card.css';

function Card({title,price,desc,addbtn,addCard}) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '100%' }}>
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p>{desc}</p>
      <button onClick={()=>addCard(addbtn)}>{addbtn}</button>
    </div>
  );
}

export default Card;
