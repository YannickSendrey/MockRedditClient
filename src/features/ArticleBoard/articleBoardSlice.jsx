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
        id: 1,
        content: 'good job',
        voteRate: 3,
        author: 'nice guy'
      },
      {
        id: 2,
        content: 'poor article',
        voteRate: -6,
        author: 'not so nice guy'
      },
      {
        id: 3,
        content: 'keep going',
        voteRate: 2,
        author: ':)'
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
        id: 1,
        content: 'Thank you for this awesome library',
        voteRate: 323,
        author: 'ReactDevelopper'
      },
      {
        id: 2,
        content: 'So easy to use I love it',
        voteRate: 202,
        author: 'IslandDev999'
      },
      {
        id: 3,
        content: 'Meh I prefer Zustand',
        voteRate: 8,
        author: 'ZustandCreator'
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
        id: 1,
        content: 'I hate this patch nerf Taric please',
        voteRate: 525,
        author: 'me but anonymously'
      },
      {
        id: 2,
        content: 'Love it I can hyper-roll every game',
        voteRate: -52,
        author: 'anotherYordle'
      },
      {
        id: 3,
        content: 'yes',
        voteRate: 0,
        author: 'yes'
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

        incrementArticleVoteRate(state, action) {
          const { articleId } = action.payload;
          const article = state.find((article) => article.id === articleId);
          if (article) {
            article.voteRate ++;
          }
        },

        decrementArticleVoteRate(state, action) {
          const { articleId } = action.payload;
          const article = state.find((article) => article.id === articleId);
          if (article) {
            article.voteRate --;
          }
        },

        incrementCommentVoteRate(state, action) {
          const { articleId, commentId } = action.payload;
          const article = state.find((article) => article.id === articleId);
          if (article) {
            const comments = article.comments;
            const comment = comments.find((comment) => comment.id === commentId)
            comment.voteRate ++;
          }
        },

        decrementCommentVoteRate(state, action) {
          const { articleId, commentId } = action.payload;
          const article = state.find((article) => article.id === articleId);
          if (article) {
            const comments = article.comments;
            const comment = comments.find((comment) => comment.id === commentId)
            comment.voteRate --;
          }
        }

    }
})

export const selectAllArticles = state => state.articleBoard;


export const { addArticle, incrementArticleVoteRate, decrementArticleVoteRate, incrementCommentVoteRate, decrementCommentVoteRate } = articleBoardSlice.actions;


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
