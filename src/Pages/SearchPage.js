import React from 'react'
import * as BooksAPI from '../BooksAPI';
import Book from '../Components/Book';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

class SearchPage extends React.Component {
  state = {
    books: []
  }

  isBookOnShelves(book) {
    const booksFromShelves = BooksAPI.retrieveBooksFromShelves();
    function compareById(bookFromShelf) {
      return bookFromShelf.id === book.id;
    }
    return booksFromShelves.find(compareById);
  }

  onChange(event) {
    const query = event.target.value
    if (query === '') {
      return
    }

    BooksAPI.search(query)
      .then(books => {
        books = books.map(book => {
          const found = this.isBookOnShelves(book)
          if (found) {
            book.shelf = found.shelf;
          }
          return book
        });

        this.setState({ books: books })
      })
      .catch(() => toast.error("Falha ao buscar os livros"))
  }
  render() {
    return (

      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">

            <input onChange={this.onChange.bind(this)} type="text" placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => {
              return (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              )
            })}
          </ol>
        </div>
      </div>


    )
  }
}


export default SearchPage;