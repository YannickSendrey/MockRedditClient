import { configureStore } from '@reduxjs/toolkit';
import articleBoardReducer from '../features/ArticleBoard/articleBoardSlice';
import searchInputReducer from '../features/SearchInput/searchInputSlice';

export default configureStore({
    reducer: {
        articleBoard: articleBoardReducer,
        searchInput: searchInputReducer
    }
});
