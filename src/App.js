import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Pages/SearchPage';
import ShelfPage from './Pages/ShelfPage';
import {Route, Switch} from 'react-router-dom';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">

        {/* <Switch> */}
          <Route path='/' component={ShelfPage} />
          <Route path='/search' component={SearchPage} />
        {/* </Switch> */}
      </div>
    )
  }
}

export default BooksApp;
