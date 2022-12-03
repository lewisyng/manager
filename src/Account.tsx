import { AnimatePresence, motion } from 'framer-motion';
import { useTodo } from './hooks/useTodo';

const Account = () => {
    const { hasRendered, todo, setTodo, todos, handleSubmit, deleteTodo } =
        useTodo();

    return (
        <div className="container font-bold">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>

            <div>
                {todos &&
                    todos.map((todo, idx) => (
                        <AnimatePresence initial={hasRendered}>
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, marginTop: '-10px' }}
                                animate={{ opacity: 1, marginTop: 0 }}
                                exit={{ opacity: 0, marginTop: '10px' }}
                                transition={{ duration: 0.2 }}
                                onClick={() => deleteTodo(todo)}
                            >
                                {todo.label}
                            </motion.div>
                        </AnimatePresence>
                    ))}
            </div>
        </div>
    );
};

export default Account;
