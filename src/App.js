import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const deincrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);

  const reset = () => setCount(0);

  const double = () => setCount(count * 2);

  const third = () => setCount(previousCount => {
    if (previousCount % 3 === 0) {
      return previousCount / 3;
    } else {
      return previousCount;
    }
  });

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={deincrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>×2</button>
        <button onClick={third}>3の倍数のときだけ3で割る</button>
      </div>
    </>
  );
}

export default App;
