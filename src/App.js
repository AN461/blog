import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import { useParams } from 'react-router-dom'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogList from './components/BlogList'
import BlogItemDetails from './components/BlogItemDetails'

import './App.css'

function BlogItemDetailsWithParams() {
  const params = useParams();
  return <BlogItemDetails params={params} />;
}

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          <Route exact path="/" element={<BlogList/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/blogs/:id" element={<BlogItemDetailsWithParams/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  </div>
)

export default App
