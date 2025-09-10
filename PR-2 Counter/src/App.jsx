import { useEffect, useState } from 'react';
import './index.css';

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let storedCount = localStorage.getItem("count");
    if (storedCount !== null) {
      setCount(JSON.parse(storedCount));
    }
  }, []);

  let increment = () => {
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  let decrement = () => {
    if (count <= 0) {
      alert("Decrement value is not allowed below 0");
      return;
    }

    let newCount = count - 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  let reset = () => {
    setCount(0);
    localStorage.setItem("count", JSON.stringify(0));
  };
  return (
    <>
      <h1>Counter</h1>

   <div className="box">
       
      <h1 className='count'>{count}</h1>
      <button onClick={increment}>Increment</button><br /><br />
      <button onClick={decrement}>Decrement</button>
   </div>
      <br /><br />
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
