import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import SearchInput from './SearchInput'
// import SearchResults from './SearchResults'
import Book from './Book'


class BookSearch extends React.Component {

  state = {
    searchQuery: '',
    searchResults: []
  };



  searchBooks = event => {

    //set state
    this.setState({ searchQuery: event });

    const query = this.state.searchQuery;

    //search data for matches
    if (query) {
      //query not empty
      BooksAPI.search(query, 20).then((books) => {
        this.setState({ searchResults: books })
        console.log(books);
      });
    } else {
      // query is empty
      console.log("query empty");
      // this.setState({ searchQuery: '' })
      // this.setState({ searchResults: [] })
    }

  }


  render() {

    const { searchQuery, searchResults } = this.state;
    const { updateBookStatus } = this.props;

    return (


      <div className="search-books">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <SearchInput searchBooks={this.searchBooks} />
          </div>
          <div>

          </div>
          <div className="search-books-results">
            {/* git rid of this */}
            <p>{searchQuery}</p>

            <div>
              <ol className="books-grid">
                {searchResults.map(book => (
                  <Book key={book.id} book={book} updateBookStatus={updateBookStatus} />
                ))}
              </ol>
            </div>

          </div>
        </div>
      </div>
    )
  }
}


export default BookSearch