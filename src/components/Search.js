import React from 'react'
import { Link } from "react-router-dom"
import Book from './Book';

class Search extends React.Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
                        <input type="text" placeholder="Search by title or author" onChange={(e) => this.props.updateSearch(e)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {!(this.props.searchResults.length === 0) && (this.props.searchResults)
                            .map((book) => (<li key={book.book.id}><Book book={book.book} moveBook={this.props.moveBook} selection={book.selection}></Book></li>))}
                    </ol>
                </div>
            </div >
        )
    }
}

export default Search;
