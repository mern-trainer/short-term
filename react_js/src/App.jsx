// import Header from "./Components/Header"

import { BrowserRouter, Route, Routes } from "react-router"
import LandingPage from "./Pages/LandingPage"
import AboutPage from "./Pages/AboutPage"

// state => Object to handle data =>
// Hooks => function to handle state
// useState => function to handle state
    
const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/about" Component={AboutPage} />
        </Routes>
    </BrowserRouter>
}

export default App
