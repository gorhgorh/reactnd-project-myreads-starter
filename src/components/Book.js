import React from 'react'
import BookSelector from './BookSelector';
import PropTypes from 'prop-types';

const Book = (props) => {
    if (props.book) {
        return (
            <div className="book">
                <div className="book-top">
                    {/* check thumbnail of the book before rendering cover */}
                    {props.book.imageLinks ?
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>
                        : <div className="book-cover" style={{ width: 128, height: 192 }}></div>
                    }
                    <BookSelector moveBook={props.moveBook} book={props.book} selection={props.selection} />
                </div>
                <div className="book-title">{props.book.title}</div>
                {props.book.authors && <div className="book-authors">{props.book.authors.toString()}</div>}
            </div>
        )
    } else {
        return null
    }
}

Book.propTypes = {
    book: PropTypes.shape({
        imageLinks: PropTypes.shape({
            smallThumbnail: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired
        }).isRequired,
        authors: PropTypes.array
    })
}

export default Book;