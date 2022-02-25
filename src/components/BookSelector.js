import React from 'react'

class BookSelector extends React.Component {
    options = [
        { value: "none", text: "None" },
        { value: "currentlyReading", text: "Reading" },
        { value: "wantToRead", text: "Will Read" },
        { value: "read", text: "Read" },
    ]

    render() {
        return (
            <div className="book-shelf-changer">
                <select form="bookForm" onChange={(e) => this.props.moveBook(e, this.props.book)}>
                    <option key="move" value="move" disabled>Move to...</option>
                    {
                        this.options
                            .map((option) => <option key={option.value} value={option.value} selected={(this.props.selection === option.value)}>{option.text}</option>)
                    }
                </select>
            </div>
        )
    }
}

export default BookSelector;