import { AnimatePresence } from 'framer-motion';
import Card from '../../Card/Card';
import Columns from '../../Columns/Columns';
import { useModal } from '../../hooks/useModal';
import todosSelectors from '../../store/selectors/todos';
import { useAppSelector } from '../../store/store';
import { Todos } from '../../store/types/todo';
import Icon from '../../ui/Input/Icon/Icon';
import CreateTodoModal from '../CreateTodoModal';

const Dashboard = () => {
  const state = useAppSelector((state) => state);
  const todos: Todos = todosSelectors.getTodos(state);

  const { modalIsOpen, openModal, closeModal } = useModal();

  return (
    <div className="container font-bold">
      <Columns />

      <button className="flex items-center gap-4" onClick={openModal}>
        <Icon />
        <p>Create todo</p>
      </button>

      <CreateTodoModal open={modalIsOpen} closeModal={closeModal} />

      <div className="py-6 flex flex-col gap-4">
        {todos &&
          todos.map((todo, idx) => (
            <AnimatePresence key={idx} initial={false}>
              <Card
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
