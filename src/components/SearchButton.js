import React from 'react'

class SearchButton extends React.Component {

    render() {
        return (
            <div className="open-search">
                <button onClick={() => window.location.href = '/search'}>Add a Book</button>
            </div>
        )
    }
}
export default SearchButton;
