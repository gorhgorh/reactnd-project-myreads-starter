import React from 'react'
import { Link } from "react-router-dom"

class SearchButton extends React.Component {

    render() {
        return (
            <Link to='search' className="open-search">
                <button >Add a Book</button>
            </Link>
        )
    }
}

export default SearchButton;
