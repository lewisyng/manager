import { FunctionComponent } from 'react';
import { Todo as TodoType } from '../../store/types/todo';

type TodoProps = {
    todo: TodoType;
};

const Todo: FunctionComponent<TodoProps> = ({ todo }) => {
    return (
        <div>
            <div>{todo.title}</div>
        </div>
    );
};

export default Todo;
