import React from 'react'

class BookSelector extends React.Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select form="bookForm" onChange={(e) => this.props.moveBook(e, this.props.bookID)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookSelector;