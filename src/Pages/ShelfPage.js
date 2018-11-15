import React from 'react'
import Shelf from '../Components/Shelf';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

class ShelfPage extends React.Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }


  loadBooks() {
    BooksAPI.getAll()
      .then(books => {
        BooksAPI.storeBooksFromShelves(books)
        const currentlyReading = books.filter(function filterBooks(book) { return book.shelf === 'currentlyReading' })
        const wantToRead = books.filter(function filterBooks(book) { return book.shelf === 'wantToRead' })
        const read = books.filter(function filterBooks(book) { return book.shelf === 'read' })
        this.setState({ currentlyReading: currentlyReading, wantToRead: wantToRead, read: read })
      })
      .catch(() => toast.error("Falha ao listar os livros"))  
    }

  componentWillMount() {
    this.loadBooks();
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf books={this.state.currentlyReading} title={"Currently Reading"} toastr={this.state.toastr}
              notifyBookUpdated={this.loadBooks.bind(this)} />

            <Shelf books={this.state.wantToRead} title={"Want to Read"} toastr={this.state.toastr}
              notifyBookUpdated={this.loadBooks.bind(this)} />

            <Shelf books={this.state.read} title={"Read"} toastr={this.state.toastr}
              notifyBookUpdated={this.loadBooks.bind(this)} />
          </div>

        </div>
        <div className="open-search">
          <Link to={"/search"}>Add a book</Link>
        </div>
      </div>

    )
  }
}


export default ShelfPage;