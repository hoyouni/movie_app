import React from 'react';

function Food({name}) {
  return <h1>I love {name}</h1>;
}

const foodILike = [
  {
    name: "kimchi"
  },
  {
    name: "samgyeopsal"
  },
  {
    name: "bibimbap"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name}></Food>)}
    </div>
  );
}

export default App;
