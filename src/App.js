import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Pages/SearchPage';
import ShelfPage from './Pages/ShelfPage';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false

  }

  showSearch(){
    this.setState({showSearchPage:true})
    
  }

  hideSearch(){
    this.setState({showSearchPage:false})
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage hideSearch={this.hideSearch.bind(this)} />
        ) : (

          <ShelfPage showSearch={this.showSearch.bind(this)}/>
        )}
      </div>
    )
  }
}

export default BooksApp;
