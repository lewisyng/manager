import { supabase } from '@/supabaseClient';

const fetchAllTodos = async () => {
    const { data, error } = await supabase.from('todo').select();

    if (error) {
        throw Error;
    }

    return data;
};

const deleteTodo = async (id) => {
    const { data, error } = await supabase
            .from('todo')
            .delete()
            .eq('id', id);
}

const todoApi = {
    deleteTodo,
    fetchAllTodos,
};

export default todoApi;
