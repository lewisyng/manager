import { Todo } from '@/components';
import todosSelectors from '@/store/selectors/todos';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { FunctionComponent } from 'react';
import { Todos as TodosType } from '@/store/types/todo';
import api from '@/api';
import { setTodos } from '@/store/slices/todos';

type TodosProps = {
    columnId: string;
};

export const Todos: FunctionComponent<TodosProps> = ({ columnId }) => {
    const state = useAppSelector((state) => state);
    const todos: TodosType = todosSelectors.getTodosFromColumn(state, columnId);

    const dispatch = useAppDispatch();

    const deleteTodo = async (id: string) => {
        await api.deleteTodo(id);

        const todos = await api.fetchAllTodos();

        dispatch(setTodos(todos));
    };

    if (todos && todos.length > 0) {
        return (
            <div className="grid gap-4">
                {todos.map((todo, idx) => (
                    <Todo key={idx} todo={todo} handleDelete={deleteTodo} />
                ))}
            </div>
        );
    }

    return null;
};
