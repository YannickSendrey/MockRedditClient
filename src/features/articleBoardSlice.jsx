import { createSlice } from '@reduxjs/toolkit';

export const articleBoardSlice = createSlice({
    name: 'articleBoard',
    initialState: [
      {
        id: 1,
        title: 'Mon premier article',
        voteRate: 4,
        contentImg: 'src/assets/react.svg',
        contentText: 'j\'adore reddit et les apis yes',
        author: 'Yannick',
        publishDate: '22/07/2023',
        comNumber: Math.floor(Math.random() * 10)
      },

      {
        id: 2,
        title: 'React-redux',
        voteRate: 1402,
        contentImg: 'src/assets/react.svg',
        contentText: 'j\'adore react ça c\'est vrai par contre',
        author: 'Meta',
        publishDate: '01/04/2017',
        comNumber: Math.floor(Math.random() * 1000)
      },

      {
        id: 3,
        title: 'TFT cheatsheet',
        voteRate: 567,
        contentImg: 'src/assets/react.svg',
        contentText: 'je déteste KARMA',
        author: 'Riot Kassadin',
        publishDate: '25/12/2022',
        comNumber: Math.floor(Math.random() * 500)
      }
    ],
    reducers: {
        addArticle(state, action) {
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

export const selectAllArticles = state => state.articleBoard;

export const { addArticle, incrementVoteRate, decrementVoteRate } = articleBoardSlice.actions;

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