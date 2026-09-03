import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sampleData: {
        dataA: true,
        dataB: darkicon,
    },
};

const sampleSlice = createSlice({
    name: 'sampleData',
    initialState,
    reducers: {
        functionSample: (state, action) => {
            // Example of how to update the state
        }
    }
});

export const { functionSample } = sampleSlice.actions;
export default sampleSlice.reducer;