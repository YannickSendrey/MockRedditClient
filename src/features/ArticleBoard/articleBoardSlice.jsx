import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  {
    id: 1,
    title: 'My First Article',
    voteRate: 4,
    contentImg: '/assets/christin-hume-Hcfwew744z4-unsplash.jpg',
    contentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim est consectetur doloribus soluta! Omnis sit modi incidunt animi, saepe autem minus repellat sunt quisquam nulla facere quod magnam reiciendis ut blanditiis',
    author: 'Yannick',
    publishDate: '22/07/2023',
    comNumber: Math.floor(Math.random() * 30 + 5),
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
    contentImg: '/assets/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg',
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
    contentImg: '/src/assets/ella-don-GVbd5btrqeA-unsplash.jpg',
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
  },

  {
    id: 4,
    title: 'Reddit API Controversy',
    voteRate: 14850,
    contentImg: '/src/assets/brett-jordan-0FytazjHhxs-unsplash.jpg',
    contentText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, at iure provident impedit et reiciendis velit nisi vero officia suscipit id odit molestias fugit, minima earum, alias harum numquam est architecto blanditiis error distinctio ipsa excepturi. Provident vel dolore ea quos? Sapiente quod, rem quia error hic dolor totam consequatur nemo facilis vel dolore aliquid repellendus unde ad minima cumque.',
    author: 'WebJournalist',
    publishDate: '01/06/2023',
    comNumber: Math.floor(Math.random() * 1400),
    comments: [
      {
        id: 1,
        content: 'free the API',
        voteRate: 9550,
        author: 'anonymous'
      },
      {
        id: 2,
        content: 'I think they are free to do so',
        voteRate: -49,
        author: 'Epon Rusk'
      },
      {
        id: 3,
        content: 'I will leave this platform and join Threads',
        voteRate: 2,
        author: 'RedditFan491'
      }
    ]
  },

  {
    id: 5,
    title: 'what is the best programmation language',
    voteRate: 34,
    contentImg: '/src/assets/james-harrison-vpOeXr5wmR4-unsplash.jpg',
    contentText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium mollitia facilis pariatur ipsum ex, ab provident exercitationem sequi nam corrupti modi eveniet magni possimus? Pariatur delectus eos hic, magnam saepe adipisci exercitationem odit voluptas a aut. Dolorem repellat vel est similique voluptas, voluptates fugiat quasi quia aspernatur esse et deleniti? Facere repudiandae impedit libero quasi consequuntur perferendis dolorem labore culpa provident quibusdam possimus aspernatur, ea minima odio nobis tempora sequi voluptate eaque iste debitis reiciendis illum magnam aperiam. Ipsum ducimus accusamus asperiores consectetur cum magni dolorem, hic maiores, omnis unde vitae? Id temporibus perferendis ratione, a, porro obcaecati veniam reprehenderit accusantium, debitis voluptatum eveniet tempore expedita aperiam vel? Similique quae, et quasi laboriosam reiciendis rem mollitia inventore est doloremque provident exercitationem minima eius ipsum laudantium impedit hic magni aut? Aspernatur ad eius assumenda nulla. Eligendi dolor natus cum quasi doloremque architecto similique ab neque ipsa autem nulla consequuntur et ex, aspernatur corrupti aut deleniti cupiditate, rerum velit. Delectus, officiis rerum. Aspernatur enim nostrum error beatae consectetur provident laborum praesentium. Asperiores tenetur molestias consequuntur debitis quisquam nesciunt enim corrupti inventore illum porro repudiandae sint earum, dignissimos, laborum distinctio dolores adipisci possimus qui quam a totam magni optio provident vero. Repellat sed quis nobis, doloremque, minus temporibus voluptatum ipsa mollitia consectetur tempora, perferendis cumque ipsum cupiditate autem excepturi sit quaerat aspernatur officia dolorem porro! Cum, alias iste sed officiis, at quas a aspernatur minus distinctio veritatis ducimus et, accusamus dolore ullam nulla? Iusto aperiam explicabo totam autem optio officiis animi perferendis aliquid modi. Dicta nobis earum consectetur, expedita modi obcaecati non quis adipisci magnam ad molestias dolores minus distinctio voluptates dolor deserunt natus maiores nisi explicabo molestiae itaque provident magni quisquam quia. Rem, laudantium mollitia reiciendis et magnam natus beatae consequatur impedit libero laborum odio temporibus, ex, suscipit at iusto quam adipisci facilis pariatur? Nisi dolorum fugit tempora consectetur corrupti molestiae aperiam deserunt reiciendis. Consectetur, quas ad nam repellendus sunt, inventore dolor repellat ipsa aperiam voluptatum ipsam quod dolores eligendi distinctio facilis voluptas aut ex. Architecto vero voluptate dignissimos, vel illo obcaecati! Laudantium sunt, cupiditate repellat earum, molestiae ullam quae modi atque velit dolores quisquam incidunt qui quidem maiores aspernatur, facere nihil ipsa debitis minima? Illum quia esse, tenetur velit quae voluptatibus, cum modi atque pariatur possimus sed distinctio deleniti cumque enim aliquam nulla earum ut ratione eius? Recusandae reiciendis esse dignissimos at saepe, aliquid perferendis placeat, ducimus deleniti nam ea atque tempora magni impedit? Tempora earum excepturi inventore aliquam, consequuntur possimus voluptatum laudantium, quo sed atque saepe ad laboriosam  and so this is why JAVASCRIPT IS BETTER',
    author: 'JavaScript fan',
    publishDate: '31/12/2021',
    comNumber: Math.floor(Math.random() * 15000), 
    comments: [
      {
        id: 1,
        content: 'TEAM PHP',
        voteRate: -4,
        author: 'PHP'
      },
      {
        id: 2,
        content: 'TEAM JS',
        voteRate: 400,
        author: 'js native enjoyer'
      },
      {
        id: 3,
        content: 'i love both',
        voteRate: 0,
        author: 'random guy from normandy'
      }
    ]
  },

  {
    id: 6,
    title: 'Hello I am new there',
    voteRate: 1,
    contentImg: '/src/assets/jametlene-reskp-vSVfPr2Uy3U-unsplash.jpg',
    contentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, exercitationem?',
    author: 'user1944521',
    publishDate: '10/08/2023',
    comNumber: 1,
    comments: [
      {
        id: 1,
        content: 'hello',
        voteRate: 1,
        author: 'user1944520'
      }
    ]
  },

  {
    id: 7,
    title: 'Twitter becomes X',
    voteRate: -42421,
    contentImg: '/src/assets/souvik-banerjee-9Z-2Ktg6CIM-unsplash.jpg',
    contentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequatur esse fugit doloremque mollitia tempore quo deserunt error ipsum ex dicta vitae eum nihil provident at, eius saepe in. Eum nostrum tempora deleniti minima suscipit, error laudantium harum delectus omnis ipsa, esse in neque eos quae fugit rerum animi molestiae?',
    author: 'Elon Musk',
    publishDate: '15/07/2023',
    comNumber: Math.floor(Math.random() * 5000),
    comments: [
      {
        id: 1,
        content: 'no thank you',
        voteRate: 3500,
        author: 'TwitterUserSince2011'
      },
      {
        id: 2,
        content: 'how can i pay for twitter blue',
        voteRate: -4,
        author: 'Free speech enjoyer'
      },
      {
        id: 3,
        content: 'no no thank you',
        voteRate: 3499,
        author: 'TwitterUserSince2011'
      }
    ]
  },

  {
    id: 8,
    title: 'WHY IS PHP THE BEST PROG LANGUAGE',
    voteRate: 100,
    contentImg: '/src/assets/ben-griffiths-4wxWBy8Jo1I-unsplash.jpg',
    contentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, soluta a. Tempore, laborum quia? Exercitationem eius suscipit cumque consequuntur vero. Sunt debitis totam minima eveniet voluptatum voluptas cupiditate placeat. Harum repudiandae nesciunt quia distinctio error modi ipsum consequuntur deserunt molestiae sequi neque quasi adipisci delectus velit sed tenetur, cupiditate suscipit eos officiis nam laudantium natus accusantium quos labore! Inventore perferendis distinctio adipisci consequuntur, facilis ipsum vero assumenda aperiam quos aspernatur sint obcaecati sunt, quis eligendi, veritatis officiis itaque beatae atque at quibusdam voluptas molestiae libero. Aperiam a expedita quaerat fuga, quidem doloremque atque deleniti quo suscipit quos provident blanditiis in voluptatibus dignissimos ratione dolor beatae cumque sint nulla, ipsa, sed maxime dolores dicta. Veniam minus accusamus sint ullam beatae, consequatur hic. Iusto earum quae cum porro tenetur sed dolores numquam laboriosam ab possimus a eos ullam accusantium repellendus facilis architecto atque, eaque quasi assumenda soluta dolor? Est iste vitae facere natus ratione dolor mollitia aperiam delectus odit harum nemo ducimus voluptas, veritatis voluptatem ab, deserunt incidunt voluptatum distinctio maxime excepturi molestias minus illo molestiae similique? Sequi cupiditate magnam esse! Voluptas atque nulla neque, ad maxime porro repellat quas cupiditate quis dicta magnam in illo natus, ipsa sint enim voluptates totam dignissimos nam labore quos veniam laboriosam? Deserunt alias dolorem sapiente repellat impedit maiores suscipit corrupti nisi quos! Iusto consequuntur repellat nam debitis ducimus illo laborum! Nulla sint accusamus quibusdam. Dolorem asperiores voluptates dignissimos vero natus nihil doloremque ducimus ipsa quibusdam ab quis quod, assumenda quae ratione. Consequatur ipsam ex magni, soluta consequuntur molestiae eligendi nisi ipsum dicta! Nobis modi minus fugit, temporibus tempore consequatur fuga optio ipsum provident iste quasi ex molestias adipisci nesciunt quae, natus, quis debitis repellendus culpa! Neque molestiae quam cumque velit delectus inventore ad vel quis? Ullam enim itaque ut qui reiciendis. Tempore ea magnam aperiam. And obviously PHP is the best langage, do not listen to what you read online kids !!!',
    author: 'humble 60 years PHP dev',
    publishDate: '01/02/2023',
    comNumber: Math.floor(Math.random() * 15000),
    comments: [
      {
        id: 1,
        content: 'TEAM JS',
        voteRate: -400,
        author: 'JS'
      },
      {
        id: 2,
        content: 'TEAM PHP',
        voteRate: 1400,
        author: 'PHP'
      },
      {
        id: 3,
        content: 'i prefer java',
        voteRate: 0,
        author: '???'
      },
      {
        id: 4,
        content: 'no caps in the title please',
        voteRate: 104353,
        author: 'RedditAdmin'
      }
    ]
  },

  {
    id: 9,
    title: 'What is the best programming language 2023 edition',
    voteRate: 56,
    contentImg: '/src/assets/florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
    contentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, soluta a. Tempore, laborum quia? Exercitationem eius suscipit cumque consequuntur vero. Sunt debitis totam minima eveniet voluptatum voluptas cupiditate placeat. Harum repudiandae nesciunt quia distinctio error modi ipsum consequuntur deserunt molestiae sequi neque quasi adipisci delectus velit sed tenetur, cupiditate suscipit eos officiis nam laudantium natus accusantium quos labore! Inventore perferendis distinctio adipisci consequuntur, facilis ipsum vero assumenda aperiam quos aspernatur sint obcaecati sunt, quis eligendi, veritatis officiis itaque beatae atque at quibusdam voluptas molestiae libero. Aperiam a expedita quaerat fuga, quidem doloremque atque deleniti quo suscipit quos provident blanditiis in voluptatibus dignissimos ratione dolor beatae cumque sint nulla, ipsa, sed maxime dolores dicta. Veniam minus accusamus sint ullam beatae, consequatur hic. Iusto earum quae cum porro tenetur sed dolores numquam laboriosam ab possimus a eos ullam accusantium repellendus facilis architecto atque, eaque quasi assumenda soluta dolor? Est iste vitae facere natus ratione dolor mollitia aperiam delectus odit harum nemo ducimus voluptas, veritatis voluptatem ab, deserunt incidunt voluptatum distinctio maxime excepturi molestias minus illo molestiae similique? Sequi cupiditate magnam esse! Voluptas atque nulla neque, ad maxime porro repellat quas cupiditate quis dicta magnam in illo natus, ipsa sint enim voluptates totam dignissimos nam labore quos veniam laboriosam? Deserunt alias dolorem sapiente repellat impedit maiores suscipit corrupti nisi quos! Iusto consequuntur repellat nam debitis ducimus illo laborum! Nulla sint accusamus quibusdam. Dolorem asperiores voluptates dignissimos vero natus nihil doloremque ducimus ipsa quibusdam ab quis quod, assumenda quae ratione. Consequatur ipsam ex magni, soluta consequuntur molestiae eligendi nisi ipsum dicta! Nobis modi minus fugit, temporibus tempore consequatur fuga optio ipsum provident iste quasi ex molestias adipisci nesciunt quae, natus, quis debitis repellendus culpa! Neque molestiae quam cumque velit delectus inventore ad vel quis? Ullam enim itaque ut qui reiciendis. Tempore ea magnam aperiam. And so this is why JAVASCRIPT IS STILL THE BEST LANGUAGE',
    author: 'JavaScript fan',
    publishDate: '01/01/2023',
    comNumber: Math.floor(Math.random() * 15000), 
    comments: [
      {
        id: 1,
        content: 'TEAM PHP',
        voteRate: -400,
        author: 'PHP'
      },
      {
        id: 2,
        content: 'TEAM JS',
        voteRate: 1400,
        author: 'js native enjoyer'
      },
      {
        id: 3,
        content: 'i love both',
        voteRate: 0,
        author: 'still a random guy from normandy'
      }
    ]
  },

  {
    id: 10,
    title: 'How to deploy your website in 2023',
    voteRate: 100,
    contentImg: '/src/assets/kevin-canlas-BHPGjYd4fp8-unsplash.jpg',
    contentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, soluta a. Tempore, laborum quia? Exercitationem eius suscipit cumque consequuntur vero. Sunt debitis totam minima eveniet voluptatum voluptas cupiditate placeat. Harum repudiandae nesciunt quia distinctio error modi ipsum consequuntur deserunt molestiae sequi neque quasi adipisci delectus velit sed tenetur, cupiditate suscipit eos officiis nam laudantium natus accusantium quos labore! Inventore perferendis distinctio adipisci consequuntur, facilis ipsum vero assumenda aperiam quos aspernatur sint obcaecati sunt, quis eligendi, veritatis officiis itaque beatae atque at quibusdam voluptas molestiae libero. Aperiam a expedita quaerat fuga, quidem doloremque atque deleniti quo suscipit quos provident blanditiis in voluptatibus dignissimos ratione dolor beatae cumque sint nulla, ipsa, sed maxime dolores dicta. Veniam minus accusamus sint ullam beatae, consequatur hic. Iusto earum quae cum porro tenetur sed dolores numquam laboriosam ab possimus a eos ullam accusantium repellendus facilis architecto atque, eaque quasi assumenda soluta dolor? Est iste vitae facere natus ratione dolor mollitia aperiam delectus odit harum nemo ducimus voluptas, veritatis voluptatem ab, deserunt incidunt voluptatum distinctio maxime excepturi molestias minus illo molestiae similique? Sequi cupiditate magnam esse! Voluptas atque nulla neque, ad maxime porro repellat quas cupiditate quis dicta magnam in illo natus, ipsa sint enim voluptates totam dignissimos nam labore quos veniam laboriosam? Deserunt alias dolorem sapiente repellat impedit maiores suscipit corrupti nisi quos! Iusto consequuntur repellat nam debitis ducimus illo laborum! Nulla sint accusamus quibu',
    author: 'FullstackDevLookingForAJob',
    publishDate: '01/08/2023',
    comNumber: Math.floor(Math.random() * 100), 
    comments: [
      {
        id: 1,
        content: 'Thank you for your guide',
        voteRate: 14,
        author: 'Friendly dev'
      },
      {
        id: 2,
        content: 'You could\'ve done it way easier',
        voteRate: -4,
        author: 'Not so friendly dev'
      },
      {
        id: 3,
        content: 'i like dogs and cats',
        voteRate: 0,
        author: 'someone who isnt in the right subReddit'
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

