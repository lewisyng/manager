import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../../supabaseClient';

export const todosApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllTodosOfUser: builder.query<any[] | null, void>({
            queryFn: async () => {
                const { data: todos, error } = await supabase
                    .from('todo')
                    .select();

                return { data: todos };
            },
        }),
    }),
});

export const { useGetAllTodosOfUserQuery } = todosApi;
