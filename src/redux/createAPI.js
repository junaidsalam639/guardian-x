import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const createAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://app.xylox.ai/api/',
        headers: {
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
        }
    }),
    endpoints: (builder) => ({
        getTopAction: builder.mutation({
            query: () => ({
                url: 'top_actions',
                method: 'POST',
            }),
        }),
    }),
});

export const { useGetTopActionMutation } = createAPI;

