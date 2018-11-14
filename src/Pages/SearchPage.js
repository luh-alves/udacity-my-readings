import React from 'react'
import* as BooksAPI from '../BooksAPI';
import Book from '../Components/Book';
import {Link} from 'react-router-dom';

class SearchPage extends React.Component {
  state={
    books : []
  }
  onChange(event){
     const query = event.target.value
     if (query === ''){
        return 
     }
     BooksAPI.search(query).then(books => {
       console.log(books)
       this.setState({books:books})
      })
  }
  render() {
    return (
    
          <div className="search-books">
            <div className="search-books-bar">
              <Link to = '/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
              
                <input onChange={this.onChange.bind(this)} type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.map( book => {
                  return (
                    <li key={book.id}>
                      <Book book={book}/>
                    </li>
                  )
              })}
              </ol>
            </div>
            </div>   
    

    )}}


export default SearchPage;