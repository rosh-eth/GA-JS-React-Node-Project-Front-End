import React, { useState } from 'react';

const Home = () => {
    const [counter, setCounter] = useState(0);
    const [banana, setBanana] = useState('')
    const increment = () => {
        setCounter(counter + 1);
        setBanana("incrementing");
    }
    const decrement = () => {
        setCounter(counter - 1);
        setBanana("decrementing");
    }
    const reset = (event) => {
        setCounter(parseInt(event.target.value,10))
        
    }

    const resetButton = () => {
        setCounter(0);
        setBanana("reset banana");
    }

    return  (
        <div className="card">
            <h3>{banana}</h3>
            <h2>{counter}</h2>
            <button classname="button" onClick={increment}>Increment</button>
            <button classname="button" onClick={decrement}>Decrement</button>
            <button classname="button" onClick={resetButton}>Reset</button>
            <input onChange={reset} />
        </div>
    )
}

export default Home;