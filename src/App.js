import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'




class BooksApp extends React.Component {

  state = { books: [] };

  componentDidMount() {
    //get data from API and put in state
    BooksAPI.getAll().then(books => this.setState({ books }))
  }


  updateBookStatus = (updatedBook, status) => {
    // update book data
    BooksAPI.update(updatedBook, status).then(response => {
      updatedBook.shelf = status;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== updatedBook.id).concat(updatedBook)
      }))
    })
  }


  render() {

    return (
      //routes to home and search pages
      <div className="app" >
        <Route
          exact path="/"
          render={() => (
            <BookList
              books={this.state.books}
              updateBookStatus={this.updateBookStatus}
            />
          )}
        />
        <Route
          exact path="/search"
          render={() => (
            <BookSearch
              books={this.state.books}
              updateBookStatus={this.updateBookStatus}
            />
          )}
        />
      </div>
    )
  }
}




export default BooksApp
