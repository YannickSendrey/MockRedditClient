import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'My First Article',
    voteRate: 4,
    contentImg: 'https://picsum.photos/204',
    contentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est consectetur doloribus soluta! Omnis sit modi incidunt animi, saepe autem minus repellat sunt quisquam nulla facere quod magnam reiciendis ut blanditiis',
    author: 'Yannick',
    publishDate: '22/07/2023',
    comNumber: Math.floor(Math.random() * 10),
    comments: [
      {
        content: 'good job',
        rate: 3
      },
      {
        content: 'poor article',
        rate: -6
      },
      {
        content: 'keep going',
        rate: 2
      }
   ]
  },

  {
    id: 2,
    title: 'React-redux',
    voteRate: 1402,
    contentImg: 'https://picsum.photos/301',
    contentText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nihil ipsa quasi ullam ipsum distinctio voluptates deleniti, libero neque debitis inventore delectus! Perferendis delectus quasi ut rem cupiditate.',
    author: 'Meta',
    publishDate: '01/04/2017',
    comNumber: Math.floor(Math.random() * 1000),
    comments: [
      {
        content: 'Thank you for this awesome library',
        rate: 323
      },
      {
        content: 'So easy to use I love it',
        rate: 202
      },
      {
        content: 'Meh I prefer Zustand',
        rate: 8
      }
   ]
  },

  {
    id: 3,
    title: 'TFT cheatsheet',
    voteRate: 567,
    contentImg: 'https://picsum.photos/200',
    contentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam asperiores molestias, sed ab numquam vero deleniti.',
    author: 'Riot Kassadin',
    publishDate: '25/12/2022',
    comNumber: Math.floor(Math.random() * 500),
    comments: [
      {
        content: 'I hate this patch nerf Taric please',
        rate: 525
      },
      {
        content: 'Love it I can hyper-roll every game',
        rate: -52
      },
      {
        content: 'yes',
        rate: 0
      }
   ]
  }
]



export const articleBoardSlice = createSlice({
    name: 'articleBoard',
    initialState: initialState,
    reducers: {
        addArticle(state, action) {
            state.articleBoard.push(action.payload);
        },

        incrementVoteRate(state, action) {
          const { articleId } = action.payload;
          const article = state.find((article) => article.id === articleId);
          if (article) {
            article.voteRate ++;
          }
        },

        decrementVoteRate(state, action) {
          const { articleId } = action.payload;
          const article = state.find((article) => article.id === articleId);
          if (article) {
            article.voteRate -= 1;
          }
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
