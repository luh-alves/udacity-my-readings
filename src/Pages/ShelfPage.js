import React from 'react'
import Shelf from '../Components/Shelf';
import * as BooksAPI from '../BooksAPI';
import {Link} from 'react-router-dom';

class ShelfPage extends React.Component {

  state = {
    currentlyReading: [],
    wantToRead:[],
    read: [],


  }

  componentWillMount(){
    BooksAPI.getAll()
      .then(books =>{ console.log(books)
        const currentlyReading = books.filter(function filterBooks(book){return book.shelf === 'currentlyReading'})
        const wantToRead = books.filter(function filterBooks(book){return book.shelf === 'wantToRead'})
        const read = books.filter(function filterBooks(book){return book.shelf === 'read'})
        this.setState({currentlyReading:currentlyReading , wantToRead:wantToRead , read:read})
      })
  }

  render() {
    console.log(this.state)
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Shelf books = {this.state.currentlyReading} title ={"Currently Reading"}/>
                  <Shelf books = {this.state.wantToRead} title = {"Want to Read"}/>
                  <Shelf books = {this.state.read} title = {"Read"}/>
              </div>
              
            </div>
            <div className="open-search">
              <a onClick ={this.props.showSearch}>Add a book</a>
            </div>    
        </div>

)}}


export default ShelfPage;