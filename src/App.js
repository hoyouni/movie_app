import React from 'react';
import PropTypes from "prop-types";

 // React.Component 를 상속받은 App 클래스 생성
 class App extends React.Component {

  // state 요소 추가 
  state = {
    count: 0
  };

  // 메소드 요소 추가 후 setState 로직 
  add = () => {
    // 현재의 count 값을 가져와서 그 값에 로직 수행
    this.setState(current => ({count: current.count + 1}));
  };

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  // 컴포넌트가 렌더링 되고 있다
  componentDidMount() {
    console.log("component rendered");
  }

  // 컴포넌트가 업데이트 되었다.
  componentDidUpdate() {
    console.log("I'm updated");
  }

    //setState()를 호출할 때 마다 reRender 하게됨   
   render() {
     console.log("I'm rendering");
     return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
     );
   }
 }

export default App;
