import { createAPI } from "@/redux/createAPI";

const authApi = createAPI.injectEndpoints({
    endpoints: (build) => ({
        userLoginApi: build.mutation({
            query: (formValues) => {
                return {
                    url: `client/login`,
                    method: "POST",
                    body: {
                        username: formValues?.username,
                        password: formValues?.password,
                    },
                }
            },
        }),
        adminLoginApi: build.mutation({
            query: (formValues) => {
                return {
                    url: `superadmin/login`,
                    method: "POST",
                    body: {
                        username: formValues?.username,
                        password: formValues?.password,
                    },
                }
            },
        }),
    }),
});

export const { useUserLoginApiMutation, useAdminLoginApiMutation } = authApi;



