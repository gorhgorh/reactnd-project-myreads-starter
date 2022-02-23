import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book></Book>
                        </li>
                        <li>
                            <Book></Book>
                        </li>
                        <li>
                            <Book></Book>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf;