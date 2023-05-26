import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { addTodo, setUserInput } from "../../features/todos/todosSlice"

const TodoLayout = () => {
    const userInput = useSelector(state => state.todos.userInput)
    console.log(userInput)
    const dispatch = useDispatch()

    const handleCreateTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo())
    }

    const handleUserInput = (userInput) => {
        dispatch(setUserInput({userInput}))
    }

    return (
        <div>
            <form onSubmit={handleCreateTodo}>
                <input 
                type="text"
                value={userInput}
                onChange={(e) => handleUserInput(e.target.value)}
                placeholder="Write your todo here"
                className="border-2 border-gray-400 rounded-lg px-4 py-2  "
                />
                <button>Add</button>
            </form>

            <nav>
                <ul className="flex justify-center gap-4">
                    <li>
                        <NavLink to="/">All</NavLink>
                    </li>
                    <li>
                        <NavLink to="/incomplete">Incomplete</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed">Completed</NavLink>
                    </li>
                </ul>
            </nav>
            <section>
                <Outlet />
            </section>
        </div>
    )
}

export default TodoLayout