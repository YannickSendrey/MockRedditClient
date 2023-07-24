import { configureStore } from '@reduxjs/toolkit';
import articleBoardReducer from '../features/ArticleBoard/articleBoardSlice';

export default configureStore({
    reducer: {
        articleBoard: articleBoardReducer
    }
});

