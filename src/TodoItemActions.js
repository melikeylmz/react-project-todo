import { Button } from '@nextui-org/react';
import React from 'react';

const TodoItemActions = ({ size, color, onClick, text }) => {
    return (
        <div>
            <Button size={size} color={color} onClick={onClick}>
                {text}
            </Button>
        </div>
    );
};

export default TodoItemActions;
