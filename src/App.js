import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Pages/SearchPage';
import ShelfPage from './Pages/ShelfPage';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <Switch>
          <Route exact path='/' component={ShelfPage} />
          <Route path='/search' component={SearchPage} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp;
