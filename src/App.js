import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'




class BooksApp extends React.Component {

  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  // changeBookStatus

  render() {

    return (
      //routes to home and search pages
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <BookList books={this.state.books} />
          )}
        />
        <Route exact path="/search" component={BookSearch} />
      </div>
    )
  }
}




export default BooksApp
