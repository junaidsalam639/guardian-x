import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    client: {},
};

const clientManagementSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        setClientManagement: (state, action) => {
            state.client = action.payload;
        },
    },
});

export const { setClientManagement } = clientManagementSlice.actions;
export default clientManagementSlice.reducer;