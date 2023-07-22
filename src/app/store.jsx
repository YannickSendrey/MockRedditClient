import { configureStore } from '@reduxjs/toolkit';
import articleBoardReducer from '../features/articleBoardSlice';

export default configureStore({
    reducer: {
        articleBoard: articleBoardReducer
    }
});

