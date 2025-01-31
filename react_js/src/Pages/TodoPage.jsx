import { todos } from "../todos"

const TodoPage = () => {

   return <div className="card-container">
        {
            todos.map(todo => {
               return <div key={todo.id} className="todo-card">
                   <h3>Task: {todo.title}</h3>
                   <p>Completed: {todo.completed.toString()}</p>
                   <p>Added By: {todo.userId}</p>
                </div>
            })
        }
    </div>
}

export default TodoPage