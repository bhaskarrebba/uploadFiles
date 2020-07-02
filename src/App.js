import React, { useEffect } from 'react';
import './App.css';
import UploadFiles from './UploadFiles';
import { InputBox } from './InputBox';
import { Header } from './Header';
import { LoginPage } from './LoginPage';
import AppRouter from './AppRouter';
import { withRouter } from 'react-router-dom';


const App = ({history}) => {
  // useEffect(() => {
  //   history.push('/');
  // })
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12"><AppRouter /></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(App);
