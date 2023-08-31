import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {


  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App