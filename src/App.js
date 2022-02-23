import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchButton from './components/SearchButton'
import Search from './components/Search'
import { Routes, Route } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="" element={<Bookshelf></Bookshelf>} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
        <SearchButton />

      </div>
    )
  }
}

export default BooksApp
