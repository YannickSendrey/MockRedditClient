import { createSlice } from '@reduxjs/toolkit';

export const articleBoardSlice = createSlice({
    name: 'articleBoard',
    initialState: [
      {
        id: 1,
        title: 'Mon premier article',
        voteRate: 4,
        author: 'Yannick',
        publishDate: '22/07/2023',
        comNumber: Math.floor(Math.random() * 10)
      },

      {
        id: 2,
        title: 'React-redux',
        voteRate: 1402,
        author: 'Meta',
        publishDate: '01/04/2017',
        comNumber: Math.floor(Math.random() * 1000)
      },

      {
        id: 3,
        title: 'TFT cheatsheet',
        voteRate: 567,
        author: 'Riot Kassadin',
        publishDate: '25/12/2022',
        comNumber: Math.floor(Math.random() * 500)
      }
    ],
    reducers: {
        fetchArticle(state, action) {
            state.push(action.payload);
        },

        incrementVoteRate(state, articleId) {
            state.articleId.voteRate.value ++;
        },

        decrementVoteRate(state, articleId) {
            state.articleId.voteRate.value --;
        },

    }
})

export const selectAllArticles = (state) => state.articleBoardSlice;

export default articleBoardSlice.reducer;

/*
[
    {
        id: number,
        title: string,
        voteRate: number, another component
        author: string,
        publishDate: date/number,
        comNumber: number (math.random)
    }
] */