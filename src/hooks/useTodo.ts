import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useProfile } from "./useProfile";
import { useSession } from "./useSession";

export const useTodo = () => {
    const [todos, setTodos] = useState<any[]>([]);
    const [todo, setTodo] = useState('');

    const [user, setUser] = useState();
    const { session } = useSession();
    const { getUser } = useProfile(session);
    const getter = async () => {
        const {
            data: { user },
        } = await getUser();

        setUser(user);
    };

    useEffect(() => {
        getter();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const { data, error: err } = await supabase.from('todo').select();

            console.log('data', data);

            if (err) return err;

            setTodos(data);
        };

        getData();
    }, []);

    const [hasRendered, setHasRendered] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setHasRendered(true);

        setTodos([...todos, { label: todo }]);
        setTodo('');

        const { error } = await supabase
            .from('todo')
            .insert({ label: todo, user_id: user.id });

        if (error) return error;

        const { data, error: err } = await supabase.from('todo').select();

        if (err) return err;

        setTodos(data);
    };

    const deleteTodo = async (todo) => {
        try {
            const { error } = await supabase
                .from('todo')
                .delete()
                .eq('id', todo.id);

            if (error) {
                throw error;
            }
        } catch (err) {
            console.log('error', err);
        }

        const { data, error: err } = await supabase.from('todo').select();

        if (err) return err;

        setTodos(data);
    };

    return {
        hasRendered,
        todo,
        todos,
        deleteTodo,
        handleSubmit,
        setTodo
    }
}