import React, {useState, useEffect} from 'react';

const App = (props) => {
  const [state, setState] = useState(props);
  const {name, price} = state;

  useEffect(() => {
    console.log('this is like componentDidMount or compnentDidUpdate.');
  });

  useEffect(() => {
    console.log('this is like componentDidMount.');
  }, []);

  useEffect(() => {
    console.log('this callback is for name only.');
  }, [name]);

  const reset = () => {
    setState(props);
  }

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000,
}

export default App;
