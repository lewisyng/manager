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

const fetchAllColumns = async () => {
    const { data, error } = await supabase.from('columns').select();

    if (error) throw error;

    return data;
};

const columnApi = {
    createColumn,
    fetchAllColumns,
};

export default columnApi;
