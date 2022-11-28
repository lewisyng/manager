import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { AnimatePresence, motion } from 'framer-motion';

const Account = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState<any[]>([]);

    const [hasRendered, setHasRendered] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setHasRendered(true)

        setTodos([...todos, { label: todo }]);
        setTodo('');

        const { error } = await supabase.from('todo').insert({ label: todo });

        if (error) return error;

        const { data, error: err } = await supabase.from('todo').select();

        if (err) return err;

        setTodos(data);
    };

    useEffect(() => {
        const getData = async () => {
            const { data, error: err } = await supabase
                .from('todo')
                .select('label');

            console.log('data', data);

            if (err) return err;

            setTodos(data);
        };

        getData();
    }, []);

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
