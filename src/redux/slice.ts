import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';

interface State {
    toDoList: Task[];
    filter: 'all' | 'done';
    searchValue: string;
}

const initialState: State = {
    toDoList: [
        { title: '111', active: true, id: '961722c3' },
        { title: '222', active: false, id: 'a3ccded7' },
    ],
    filter: 'all',
    searchValue: '',
};
//TODO: fix this ts-ignore
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
                        ...state.toDoList.filter(({ id }) => id !== action.payload.id),
                        {
                            ...task,
                            active: !task!.active,
                        },
                    ],
                };
            }
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
        },
        resetState: () => {
            return {
                ...initialState,
            };
        },
        setFilter: (state, action: PayloadAction<{ filter: 'all' | 'done' }>) => {
            return {
                ...state,
                filter: action.payload.filter,
            };
        },
        setSearchValue: (state, action: PayloadAction<{ searchValue: string }>) => {
            return {
                ...state,
                searchValue: action.payload.searchValue,
            };
        },
    },
});

export const { resetState, addToDoItem, removeToDoItem, resetList, toggleActiveStatus, setFilter, setSearchValue } =
    todoSlice.actions;

export default todoSlice.reducer;
