import { BrowserRouter, Route, Routes } from "react-router"
import TodoPage from "./Pages/TodoPage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={TodoPage}/>
        </Routes>
    </BrowserRouter>
}

export default App