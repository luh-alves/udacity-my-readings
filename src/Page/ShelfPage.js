import React from 'react'
import Bookshelf from './Bookshelf';

class ShelfPage extends React.Component {
  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Bookshelf title ={"Currently Reading"}/>
                  <Bookshelf title = {"Want to Read"}/>
                  <Bookshelf title = {"Read"}/>
              </div>
              
            </div>
            <div className="open-search">
              <a onClick={this.props.showSearch}>Add a book</a>
            </div>    
        </div>

)}}


export default ShelfPage;