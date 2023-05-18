import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    list: string[];
}

const initialState: State = {
    list: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        resetState: () => {
            return {
                ...initialState,
            };
        },
    },
});

export const { resetState } = todoSlice.actions;

export default todoSlice.reducer;
