import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';

interface State {
    toDoList: Task[];
}

const initialState: State = {
    toDoList: [
        { title: '111', active: true, id: '0' },
        { title: '222', active: false, id: '1' },
        { title: '333', active: true, id: '3' },
        { title: '44444', active: false, id: '4' },
    ],
};
//TODO: fix this ts-ignore, add unique ID
// @ts-ignore
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDoItem: (state, action: PayloadAction<Task>) => {
            return {
                ...state,
                toDoList: [action.payload, ...state.toDoList],
            };
        },
        removeToDoItem: (state, action: PayloadAction<{ id: string }>) => {
            return {
                ...state,
                toDoList: state.toDoList.filter(({ id }) => id !== action.payload.id),
            };
        },
        resetList: (state) => {
            return {
                ...state,
                toDoList: initialState.toDoList,
            };
        },
        // @ts-ignore
        toggleActiveStatus: (state, action: PayloadAction<{ id: string }>) => {
            const task = state.toDoList.find(({ id }) => id === action.payload.id);
            if (task!.active) {
                return {
                    ...state,
                    toDoList: [
                        {
                            ...task,
                            active: !task!.active,
                        },
                        ...state.toDoList.filter(({ id }) => id !== action.payload.id),
                    ],
                };
            }
            return {
                ...state,
                toDoList: [
                    ...state.toDoList.filter(({ id }) => id !== action.payload.id),
                    {
                        ...task,
                        active: !task!.active,
                    },
                ],
            };
        },
        resetState: () => {
            return {
                ...initialState,
            };
        },
    },
});

export const { resetState, addToDoItem, removeToDoItem, resetList, toggleActiveStatus } = todoSlice.actions;

export default todoSlice.reducer;
