import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
//import getAll from './data' //for dev
import BookShelf from './components/BookShelf'
import BookSearch from './components/BookSearch'



class BooksApp extends React.Component {

  render() {

    // const { books } = this.state;

    return (
      //routes to home and search pages
      <div className="app">
        <Route exact path="/" component={BookList} />
        <Route exact path="/search" component={BookSearch} />
      </div>
    )
  }
}



class BookList extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookShelf />
          <div className="open-search">
            <Link to="search">
              <button>Add a Book</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}



// const BookList = props => {
//   const { bookshelves, books } = props;

//   return (
//     <div className="list-books">
//       <div className="list-books">
//         <div className="list-books-title">
//           <h1>MyReads</h1>
//         </div>
//         console.log(books)
//         <BookShelf />
//         <div className="open-search">
//           <Link to="search">
//             <button>Add a Book</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }


export default BooksApp
