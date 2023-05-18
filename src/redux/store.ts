import {configureStore} from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
    reducer: {
        todo: reducer
    }
});

export default store;
