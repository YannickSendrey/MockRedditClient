import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import { Header } from '../components/Header';
import { ArticleBoard } from '../features/ArticleBoard/ArticleBoard';

function App() {
  

  return (
    <>
      <Header />
      <ArticleBoard />
    </>
    
  )
}

export default App
