import React from 'react';

// jsx = HTML + JavaScript
// component 의 첫 글자는 대문자
// fav 라는 Food component property 의 value 들 출력
function Food({fav}) {
  return <h1>I love {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Food 
            fav="kimchi" 
      />
      <Food 
            fav="ramen" 
      />
      <Food 
            fav="samgiopsal" 
      />
      <Food 
            fav="chukumi" 
      />
    </div>
  );
}

export default App;
