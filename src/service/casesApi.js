import { createAPI } from "@/redux/createAPI";

const casesApi = createAPI.injectEndpoints({
    endpoints: (build) => ({
        getCases: build.query({
            query: ({ clientId, status }) => {
                const base = `client/${clientId}/cases/filter`;
                return status ? `${base}?status=${status}` : base;
            },
        }),
        getCasesAgentOutput: build.query({
            query: (id) => `/case/${id}/agent-outputs`,
        }),
    }),
});

export const {
    useGetCasesQuery,
    useGetCasesAgentOutputQuery,
} = casesApi;



