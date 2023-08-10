import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import { Header } from './components/Header.jsx';
import { Provider } from 'react-redux';
import store from './app/store.jsx';
import {
  createBrowserRouter,
  RouterProvider as Router,
  Route
} from "react-router-dom";
import { createRoutesFromElements } from 'react-router-dom';
import { DetailedArticle } from './components/DetailedArticle.jsx';

const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={ <Header /> }>
      <Route index element={ <App />}/>
      <Route path='/:id' element={
        <DetailedArticle />
      } />
    </Route>
 
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router router={router}>
    </Router>
  </Provider>,
)


