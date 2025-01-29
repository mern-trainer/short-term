// import Header from "./Components/Header"

import { useState } from "react";

// state => Object to handle data =>
// Hooks => function to handle state
// useState => function to handle state
    
const App = () => {

    // Password generator
    
    const [counter, setCounter] = useState(100)
    const [message, setMessage] = useState("")

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    return <div>
        {counter}
        <button onClick={handleIncrement}>Increment</button>
        <input type="text" placeholder="Enter text" name="message" onChange={(changeEvent) => {
            setMessage(changeEvent.target.value);
        }} value={message}/>
        {message}
    </div>
}

export default App
