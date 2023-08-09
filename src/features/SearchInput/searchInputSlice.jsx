import { createSlice } from '@reduxjs/toolkit';

export const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState: {
        input: ''
    },
    reducers: {
        addInput(state, action) {
            state.input = action.payload;
        }
    }
})

export const selectInputValue = state => state.searchInput.input;

export const { addInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;