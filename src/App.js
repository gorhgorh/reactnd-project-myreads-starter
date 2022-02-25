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

  // filter books with type 
  getBooksWithTypes = (myBooks, type) => {
    const books = myBooks.filter((myBook) => (myBook.selection === type))
    console.log(books)
    return books
  }

  moveBook = (e, book) => {
    const selection = e.target.value
    console.log('Moving Book')
    console.log(selection)
    this.setState((oldState) => (
      {
        myBooks: (selection !== "none") ? [...(oldState.myBooks.filter(myBook => myBook.book.id !== book.id)), { book, selection }] :
          oldState.myBooks.filter(myBook => myBook.book.id !== book.id)
      }))
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={
            <div>
              <Bookshelf shelfTitle='Reading' books={this.getBooksWithTypes(this.state.myBooks, 'currentlyReading')} moveBook={this.moveBook} ></Bookshelf>
              <Bookshelf shelfTitle='Will Read' books={this.getBooksWithTypes(this.state.myBooks, 'wantToRead')} moveBook={this.moveBook} ></Bookshelf>
              <Bookshelf shelfTitle='Read' books={this.getBooksWithTypes(this.state.myBooks, 'read')} moveBook={this.moveBook} ></Bookshelf>
            </div>} />
          <Route exact path="/search" element={<Search updateSearch={this.updateSearch} searchResults={this.state.searchResults} moveBook={this.moveBook} />} />
        </Routes>
        <SearchButton />
      </div>
    )
  }
}

export default BooksApp
