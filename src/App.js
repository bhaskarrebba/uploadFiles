import React from 'react';
import './App.css';


import { Header } from './Header';

import {Navigation} from './Navigation';
import AppRouter from './AppRouter';
import { withRouter } from 'react-router-dom';


const App = ({history}) => {
  // useEffect(() => {
  //   history.push('/');
  // })
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-lg-12"><AppRouter /></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(App);
