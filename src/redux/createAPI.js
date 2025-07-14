import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const createAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://app.xylox.ai/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            headers.set("Content-Type", "application/json");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
});


