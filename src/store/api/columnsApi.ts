import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../../supabaseClient';

export const columnsApi = createApi({
    reducerPath: 'columnsApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllColumns: builder.query<any[] | null, void>({
            queryFn: async () => {
                const { data: columns, error: err } = await supabase.from('columns').select();

                return {data: columns};
            },
        }),
    }),
});

export const { useGetAllColumnsQuery } = columnsApi;
