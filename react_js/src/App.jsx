// import Header from "./Components/Header"

import { useState } from "react";

// state => Object to handle data =>
// Hooks => function to handle state
// useState => function to handle state
    
const App = () => {
    
    const [counter, setCounter] = useState(100)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    return <div>
        {counter}
        <button onClick={handleIncrement}>Increment</button>
    </div>
}

export default App
