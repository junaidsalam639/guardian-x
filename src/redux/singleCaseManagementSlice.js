import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    case: {},
};

const singleCaseManagementSlice = createSlice({
    name: "caseManagement",
    initialState,
    reducers: {
        setCaseManagement: (state, action) => {
            state.case = action.payload;
        },
    },
});

export const { setCaseManagement} = singleCaseManagementSlice.actions;
export default singleCaseManagementSlice.reducer;
