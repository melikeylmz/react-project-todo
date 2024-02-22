import { useState } from 'react';
import FilterActions from './FilterActions';
import TodoItem from './TodoItem';
import TodoEditor from './TodoEditor';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');
    const [updateInput, setUpdateInput] = useState({
        id: 0,
        text: 'Todo 1',
        checked: false,
    });
    // all, completed, pending
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Todo 1',
            checked: false,
        },
        {
            id: 2,
            text: 'Todo 2',
            checked: false,
        },
        {
            id: 3,
            text: 'Todo 3',
            checked: false,
        },
    ]);
    const filteredTodos = todos.filter((todo) => {
        switch (filter) {
            case 'all':
                return true;
            case 'completed':
                return todo.checked === true;
            case 'pending':
                return todo.checked === false;
            default:
                return false;
        }
    });

    return (
        <div className="App">
            <div className="h-dvh bg-gray-100 flex items-center flex-col justify-center">
                <div className="mt-2 actions flex flex-col gap-1 w-72">
                    <TodoItem
                        filteredTodos={filteredTodos}
                        todos={todos}
                        setTodos={setTodos}
                        setUpdateInput={setUpdateInput}
                        updateInput={updateInput}
                        setInputValue={setInputValue}
                    ></TodoItem>
                </div>
                <TodoEditor
                    inputValue={inputValue}
                    updateInput={updateInput}
                    setInputValue={setInputValue}
                    todos={todos}
                    setTodos={setTodos}
                    setUpdateInput={setUpdateInput}
                ></TodoEditor>
                <div className="mt-4 flex gap-1 justify-center items-center">
                    <FilterActions filter={filter} setFilter={setFilter} />
                </div>
            </div>
        </div>
    );
}

export default App;
