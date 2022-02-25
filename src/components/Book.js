import React from 'react'
import BookSelector from './BookSelector';

class Book extends React.Component {
    render() {
        if (this.props.book) {
            return (
                <div className="book">
                    <div className="book-top">
                        {/* check thumbnail of the book before rendering cover */}
                        {this.props.book.imageLinks ?
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                            : <div className="book-cover" style={{ width: 128, height: 192 }}></div>
                        }
                        <BookSelector moveBook={this.props.moveBook} book={this.props.book} />
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Book;