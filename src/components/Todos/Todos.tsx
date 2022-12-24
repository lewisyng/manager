import { FunctionComponent } from 'react';
import todosSelectors from '../../store/selectors/todos';
import { useAppSelector } from '../../store/store';
import { Todos as TodosType } from '../../store/types/todo';
import Todo from '../Todo/Todo';

type TodosProps = {
    columnId: string;
};

const Todos: FunctionComponent<TodosProps> = ({ columnId }) => {
    const state = useAppSelector((state) => state);
    const todos: TodosType = todosSelectors.getTodosFromColumn(state, columnId);

    return <div>{todos && todos.map((todo, idx) => <Todo todo={todo} />)}</div>;
};

export default Todos;
