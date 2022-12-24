import { Todo } from '@/components';
import todosSelectors from '@/store/selectors/todos';
import { useAppSelector } from '@/store/store';
import { FunctionComponent } from 'react';
import { Todos as TodosType } from '@/store/types/todo';

type TodosProps = {
    columnId: string;
};

export const Todos: FunctionComponent<TodosProps> = ({ columnId }) => {
    const state = useAppSelector((state) => state);
    const todos: TodosType = todosSelectors.getTodosFromColumn(state, columnId);

    if (todos && todos.length > 0) {
        return (
            <div className="grid gap-4">
                {todos.map((todo, idx) => (
                    <Todo key={idx} todo={todo} />
                ))}
            </div>
        );
    }

    return null;
};
