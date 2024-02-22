import TodoItemActions from './TodoItemActions';

const TodoItem = ({
    filteredTodos,
    todos,
    setTodos,
    setUpdateInput,
    updateInput,
    setInputValue,
}) => {
    const onClickTodoItem = (todoId) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    checked: !todo.checked,
                };
            }
            return todo;
        });

        setTodos(updatedTodos);
    };
    const onClickDeleteTodoItem = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };
    const onClickUpdateTodoItem = (todoId) => {
        const todoToEdit = todos.find((todo) => todo.id === todoId);

        // TODO: update edilecek itemin idsi set edilecek
        setUpdateInput(todoToEdit);

        setInputValue(todoToEdit.text);
    };
    const classes = `cursor-pointer flex justify-between`;

    return (
        <div>
            <div className="mt-2 actions flex flex-col gap-1 w-72">
                {filteredTodos.map((todo) => {
                    return (
                        <div
                            key={todo.id}
                            className={classes}
                            onClick={() => onClickTodoItem(todo.id)}
                        >
                            <span
                                className={todo.checked ? 'line-through' : ''}
                            >
                                {todo.text}
                            </span>

                            <TodoItemActions
                                size={'sm'}
                                color={'danger'}
                                onClick={() => onClickDeleteTodoItem(todo.id)}
                                text={'Delete'}
                            ></TodoItemActions>
                            <TodoItemActions
                                size={'sm'}
                                color={'warning'}
                                onClick={() => onClickUpdateTodoItem(todo.id)}
                                text={'Update'}
                            ></TodoItemActions>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoItem;
