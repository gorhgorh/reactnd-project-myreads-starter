import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchButton from './components/SearchButton'
import Search from './components/Search'
import { Routes, Route } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    // id and mark types of marked books
    myBooks: [],
    searchResults: [],
  }

  searchBooks = (input) => {
    BooksAPI.search(input)
  }

  // checkempty input and api response before updating ui
  updateSearch = (e) => {
    const input = e.target.value
    if (!(input === '')) {
      BooksAPI.search(input).then((books) => {
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

  getBookWithTypes = (myBooks, type) => {
    return myBooks.filter((book) => (book.type === type))
  }

  moveBook = (e, bookID) => {
    const selection = e.target.value
    console.log(bookID)
    const bookIndex = this.state.myBooks.findIndex((myBook) => myBook.bookID === bookID)
      this.setState((oldState) => (
        {
        myBooks: (selection !== "none") ? [...(oldState.myBooks.filter(book => book.bookID !== bookID)), { bookID, selection }] :
          oldState.myBooks.filter(book => book.bookID !== bookID)
      }))
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={
            <div>
              <Bookshelf shelfTitle='Reading' myBooks={this.state.myBooks} moveBook={this.moveBook}></Bookshelf>
              <Bookshelf shelfTitle='Will Read' myBooks={this.state.myBooks} moveBook={this.moveBook}></Bookshelf>
              <Bookshelf shelfTitle='Read' myBooks={this.state.myBooks} moveBook={this.moveBook}></Bookshelf>
            </div>} />
          <Route exact path="/search" element={<Search updateSearch={this.updateSearch} searchResults={this.state.searchResults} moveBook={this.moveBook} />} />
        </Routes>
        <SearchButton />
      </div>
    )
  }
}

export default BooksApp
