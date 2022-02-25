import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
    render() {
    console.log(this.props.books)

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {!(this.props.books.length === 0) &&
                            this.props.books.map((book) => (<li key={book.book.id}><Book book={book.book} moveBook={this.props.moveBook}></Book></li>))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;