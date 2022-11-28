import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const Account = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState<any[]>([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                    todos.map((todo, idx) => <div key={idx}>{todo.label}</div>)}
            </div>
        </div>
    );
};

export default Account;
