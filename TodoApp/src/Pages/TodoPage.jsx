import { useState } from "react"

const TodoPage = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(-1)
    const [editedTodo, setEditedTodo] = useState("")

    const handleAddTodo = () => {
        if (todo == "") {
            return alert("Please enter a todo")
        }
        if (todos.includes(todo)) {
            return alert("Todo already exists")
        }
        setTodos([...todos, todo])
        setTodo("")
    }

    const handleDelete = (idx) => {
        const result = todos.filter((_, index) => index != idx)
        setTodos(result)
    }

    const handleUpdate = (idx) => {
        if (editedTodo == "") {
            return alert("Please enter a todo")
        }
        if (todos.includes(editedTodo) && todos.indexOf(editedTodo) != idx) {
            return alert("Todo already exists")
        }
        const result = todos.map((task, index) => {
            if (index == idx) {
                return editedTodo
            }
            return task
        })
        setTodos(result)
        setEditTodo(-1)
    }

    return <div className="container">
        <div className="form-container">
            <input
                type="text"
                placeholder="Eg: Buy Groceries"
                name="todo"
                value={todo}
                onChange={(changeEvent) => setTodo(changeEvent.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div className="list-container">
            {
                todos.map((task, index) => {
                    return <div key={index} className="todo-container">
                        <div>{
                            editTodo == index ? <div className="form-container">
                                <input
                                    type="text"
                                    placeholder="Eg: Buy Groceries"
                                    name="todo"
                                    value={editedTodo}
                                    onChange={(changeEvent) => setEditedTodo(changeEvent.target.value)}
                                />
                                <button onClick={() => handleUpdate(index)}>Update</button>
                            </div> : <div>{task}</div>}</div>
                        <div className="button-container">
                            <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                            <button className="edit" onClick={() => { setEditTodo(index); setEditedTodo(task) }}>Edit</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoPage