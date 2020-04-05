import React from 'react'
// import PropTypes from 'prop-types'
import Book from './Book'



class BookShelf extends React.Component {

  state = {
    books: [
      {
        id: '1',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        image: '"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"'
      },
      {
        id: '2',
        title: 'End Game',
        author: 'Orson Scott',
        image: '"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"'
      },
      {
        id: '3',
        title: '1776',
        author: 'David McCullough',
        image: '"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"'
      },
      {
        id: '4',
        title: 'Harry Potter and the Sorcerer Stone',
        author: 'J.K. Rowling',
        image: '"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"'
      },
      {
        id: '5',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        image: '"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"'
      },
      {
        id: '6',
        title: 'The Adventures of Tom Sawyer',
        author: 'Mark Twain',
        image: '"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"'
      }
    ]
  }

  render() {

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {/* loop through and pass state as prop */}
                {this.state.books.map(book => (
                  <Book key={book.id} data={book} />
                ))};
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// class Book extends React.Component {

//   state = {
//     id: '2',
//     title: 'End Game',
//     author: 'Orson Scott',
//     image: '"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"'
//   };

//   render() {

//     //destructuring - pull stuff out of object - instead of saying "this.state.author" everywhere, you just say "author"
//     const { id, title, author, image } = this.state;
//     return (
//       <div>
//         <li>
//           <div className="book">
//             <div className="book-top">
//               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}>

//               </div>

//               <BookStatus />

//             </div>
//             <div className="book-title">{title}</div>
//             <div className="book-authors">{author}</div>
//           </div>
//         </li>
//       </div >
//     )
//   }
// }

export default BookShelf