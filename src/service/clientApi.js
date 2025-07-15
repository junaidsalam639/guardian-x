import { createAPI } from "@/redux/createAPI";

const clientApi = createAPI.injectEndpoints({
    endpoints: (build) => ({
        getClient: build.query({
            query: () => `clients/list`,
            providesTags: ["client"]
        }),
        addClient: build.mutation({
            query: (formValues) => {
                return {
                    url: `client/register`,
                    method: "POST",
                    body: {
                        name: formValues?.name,
                        username: formValues?.username,
                        email: formValues?.email,
                        password: formValues?.password,
                    },
                }
            },
            invalidatesTags: ["client"]
        }),
        updateClient: build.mutation({
            query: (formValues) => {
                return {
                    url: `client/${formValues?.id}`,
                    method: "PUT",
                    body: {
                        name: formValues?.name,
                        username: formValues?.username,
                        email: formValues?.email,
                        password: formValues?.password,
                    },
                }
            },
            invalidatesTags: ["client"]
        }),
        deleteClient: build.mutation({
            query: (id) => {
                return {
                    url: `client/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["client"]
        })
    }),
});

export const {
    useGetClientQuery,
    useAddClientMutation,
    useDeleteClientMutation,
    useUpdateClientMutation
} = clientApi;



