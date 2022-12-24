import { supabase } from '../supabaseClient';

const createColumn = async (title: string) => {
    const { data, error } = await supabase
        .from('columns')
        .insert({
            title,
        })
        .select();

    if (error) {
        throw Error;
    }

    return data;
};

const columnApi = {
    createColumn,
};

export default columnApi;
