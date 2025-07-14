import { createAPI } from "@/redux/createAPI";

const clientApi = createAPI.injectEndpoints({
    endpoints: (build) => ({
        getClient: build.query({
            query: () => `clients/list`,
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
        }),
    }),
});

export const { useGetClientQuery , useAddClientMutation } = clientApi;



