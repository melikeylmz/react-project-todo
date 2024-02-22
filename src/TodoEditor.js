import React from 'react';
import { Button, Input } from '@nextui-org/react';
const TodoEditor = ({
    inputValue,
    updateInput,
    setInputValue,
    todos,
    setTodos,
    setUpdateInput,
}) => {
    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };
    const onClickAdd = () => {
        if (!inputValue) return;
        console.log(updateInput);
        // TODO Update ediyor muyuz kontrolu yapacağız
        if (updateInput.id === 0) {
            setTodos([
                ...todos,
                {
                    id: Math.random(),
                    text: inputValue,
                    checked: false,
                },
            ]);
        } else {
            console.log('update', inputValue);
            const updatedTodos = todos.map((todo) => {
                if (todo.id === updateInput.id) {
                    console.log('test');
                    return {
                        ...todo,
                        id: updateInput.id,
                        text: inputValue,
                    };
                }
                setUpdateInput({ id: 0, text: '', checked: false });
                return todo;
            });

            setTodos(updatedTodos);
        }
        setInputValue('');
    };

    return (
        <div>
            <div className="mt-4 flex justify-center items-center">
                <Input
                    value={inputValue}
                    onChange={onChangeInput}
                    variant={'underlined'}
                    label={updateInput.id === 0 ? 'New Todo' : 'Güncelle'}
                />
                {/* TODO Update ediyorsak butonun texti değişecek */}
                <Button onClick={onClickAdd}>
                    {updateInput.id === 0 ? 'Ekle' : 'Güncelle'}
                </Button>
            </div>
        </div>
    );
};

export default TodoEditor;
