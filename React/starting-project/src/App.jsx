import React, { useState } from 'react';
import Header from './components/header';
// import Card from './components/card';
import ToDolist from './components/toDolist';

// export const cardDetail = [
//   {
//     title: 'Test',
//     price: '$100',
//     desc: 'jgfishfjsdlkfjsdjf',
//     addbtn: 'Add To Cart'
//   },
//   {
//     title: 'Demo',
//     price: '$200',
//     desc: 'fstrfjmjijklkjjk',
//     addbtn: 'Add To Cart'
//   }
// ];

function App() {
  // const [cardValue, setCardValue] = React.useState('Add To Card');

  // function addCard(val,key){
  //   if(val === 'Add To Card'){
  //     setCardValue('Remove Card');
  //   } else {
  //     setCardValue('Add To Card');
  //   }
   
  // }
  
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <div className='card'>
        {
          cardDetail.map((item)=>
            <Card title={item.title} price={item.price} desc={item.desc} addbtn={cardValue} addCard={addCard}></Card>
          )
        }
          
      </div> */}
      <ToDolist />

    </div>
  );
}

export default App;
