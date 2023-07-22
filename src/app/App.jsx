import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import './App.css'
import { Header } from '../components/Header';
import { ArticleBoard } from '../features/ArticleBoard';

function App() {
  

  return (
    <>
      <Header />
      <ArticleBoard />
    </>
    
  )
}

export default App
