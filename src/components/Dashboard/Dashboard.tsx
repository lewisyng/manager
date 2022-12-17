import { AnimatePresence } from 'framer-motion';
import Card from '../../Card/Card';
import Columns from '../../Columns/Columns';
import { useModal } from '../../hooks/useModal';
import todosSelectors from '../../store/selectors/todos';
import { useAppSelector } from '../../store/store';
import { Todos } from '../../store/types/todo';
import Icon from '../ui/Icon/Icon';
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';

const Dashboard = () => {
    const state = useAppSelector((state) => state);
    const todos: Todos = todosSelectors.getTodos(state);

    return (
        <div className="container font-bold">
            <Columns />

            <CreateTodoModal />

            <div className="py-6 flex flex-col gap-4 ">
                {todos &&
                    todos.map((todo, idx) => (
                        <AnimatePresence key={idx} initial={false}>
                            <Card
                                label={
                                    <div>
                                        <p>{todo.label}</p>
                                    </div>
                                }
                                header={
                                    <div>
                                        <p>{todo.title}</p>
                                    </div>
                                }
                                body={
                                    <div>
                                        <p>{todo.description}</p>
                                    </div>
                                }
                            />
                        </AnimatePresence>
                    ))}
            </div>
        </div>
    );
};

export default Dashboard;
