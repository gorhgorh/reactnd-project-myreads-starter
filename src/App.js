import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchButton from './components/SearchButton'
import Search from './components/Search'
import { Routes, Route } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    books: {},
    searchResults: [],
    searchInput: ""
  }

  searchBooks = (input) => {
    BooksAPI.search(input)
  }

  updateSearch = (e) => {
    const input = e.target.value
    if(!(input === '')){
      BooksAPI.search(input).then((books) => {
        console.log(books)
          if (books.error === undefined) {
            this.setState(() => ({
              searchResults: books
            }))
          } else {
            this.setState(() => ({
              searchResults: []
            }))
          }
      })
    } else {
      this.setState(() => ({
        searchResults: []
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Bookshelf></Bookshelf>} />
          <Route exact path="/search" element={<Search updateSearch={this.updateSearch} searchResults={this.state.searchResults} />} />
        </Routes>
        <SearchButton />
      </div>
    )
  }
}

export default BooksApp
