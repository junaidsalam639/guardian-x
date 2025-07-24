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
            providesTags: ["casesAgentOutput"]
        }),
        updateCaseStatus: build.mutation({
            query: ({ caseId, status }) => ({
                url: `case/${caseId}/status?status=${status}`,
                method: "PUT",
            }),
        }),
        approvalCaseOrchestration: build.mutation({
            query: ({ caseId, decision }) => ({
                url: `pending-approval/${caseId}`,
                method: "POST",
                body: { decision },
            }),
            invalidatesTags: ["casesAgentOutput"]
        }),
    }),
});

export const {
    useGetCasesQuery,
    useGetCasesAgentOutputQuery,
    useUpdateCaseStatusMutation,
    useApprovalCaseOrchestrationMutation
} = casesApi;




