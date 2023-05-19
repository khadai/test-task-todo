import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';

interface State {
    toDoList: Task[];
    filter: 'all' | 'done';
    searchValue: string;
}

const initialState: State = {
    toDoList: [
        { title: 'Smile', active: true, id: 'a3ccded7' },
        { title: 'Finish test task', active: false, id: '961722c3' },
    ],
    filter: 'all',
    searchValue: '',
};

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
        toggleActiveStatus: (state, action: PayloadAction<{ id: string }>) => {
            const task = state.toDoList.find(({ id }) => id === action.payload.id);
            if (task!.active) {
                return {
                    ...state,
                    toDoList: [
                        ...state.toDoList.filter(({ id }) => id !== action.payload.id),
                        {
                            ...(task as Task),
                            active: !task!.active,
                        },
                    ],
                };
            }
            return {
                ...state,
                toDoList: [
                    {
                        ...(task as Task),
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

export const { addToDoItem, removeToDoItem, toggleActiveStatus, setFilter, setSearchValue } = todoSlice.actions;

export default todoSlice.reducer;
