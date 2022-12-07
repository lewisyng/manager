import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserResponse } from '@supabase/supabase-js';
import { supabase } from '../../supabaseClient';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getUser: builder.query<UserResponse, void>({
            queryFn: async () => {
                const user = await supabase.auth.getUser();

                return {data: user};
            },
        }),
    }),
});

export const { useGetUserQuery } = userApi;
