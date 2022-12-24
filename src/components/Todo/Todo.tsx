import { FunctionComponent } from 'react';
import Card from '../../Card/Card';
import { Todo as TodoType } from '../../store/types/todo';

type TodoProps = {
    todo: TodoType;
};

export const Todo: FunctionComponent<TodoProps> = ({ todo }) => {
    return (
        <Card>
            <div>{todo.title}</div>
        </Card>
    );
};
