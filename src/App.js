import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogList from './components/BlogList'
import BlogItemDetails from './components/BlogItemDetails'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          <Route exact path="/" component={<BlogList/>} />
          <Route exact path="/about" component={<About/>} />
          <Route exact path="/contact" component={<Contact/>} />
          <Route exact path="/blogs/:id" component={<BlogItemDetails/>} />
          <Route component={<NotFound/>} />
        </Routes>
      </div>
    </div>
  </div>
)

export default App
