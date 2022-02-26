import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import SearchButton from './components/SearchButton'
import Search from './components/Search'
import { Routes, Route } from "react-router-dom"

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      // id and mark types of marked books
      myBooks: [],
      searchResults: [],
      input: ''
    }
    this.getMyBooks()
  }

  // check empty input and api response before updating ui
  updateSearch = async (e) => {
    const input = e.target.value
    if (!(input === '')) {
      this.setState((oldState) => ({
        input: input,
      }))
      const books = await BooksAPI.search(input)
      if (books.error === undefined) {
        this.setState((oldState) => ({
          searchResults: books
        }))
      } else {
        this.setState(() => ({
          searchResults: []
        }))
      }
    }
    else {
      this.setState(() => ({
        input: "",
        searchResults: []
      }))
    }
  }

  getMyBooks = () => {
    BooksAPI.getAll().then((myBooks) => {
      console.log(myBooks)
      this.setState((oldState) => ({
        myBooks: myBooks
      }))
    })
  }

  // filter books with type 
  getBooksWithTypes = (myBooks, type) => {
    const books = myBooks.filter((myBook) => (myBook.shelf === type))
    return books
  }

  moveBook = async (e, book) => {
    const selection = e.target.value
    this.updateMyBooks(book, selection)
    await BooksAPI.update(book, selection)
  }

  updateMyBooks = (book, selection) => {
    console.log('updating books')
    this.setState((oldState) => ({
      myBooks: [...(oldState.myBooks.filter((myBook) => myBook.id !== book.id)), Object.defineProperty(book, 'shelf', { value: selection })]
    }))
  }

  getShelf = (book) => {
    const bookFound = this.state.myBooks.find((myBook) => myBook.id === book.id)
    return (bookFound) ? bookFound.shelf : "none"
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
          <Route exact path="/search" element={
            <Search input={this.state.input} updateSearch={this.updateSearch} searchResults={this.state.searchResults} moveBook={this.moveBook} getShelf={this.getShelf} />} />
        </Routes>
        <SearchButton />
      </div>
    )
  }
}

export default BooksApp
