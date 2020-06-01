import React from 'react';
import './App.css';
import UploadFiles from './UploadFiles';
import { InputBox } from './InputBox';
import {Header}  from './Header';
function App() {
  return (
    <React.Fragment>
       <Header/>
    <div className="container">
     
      <div className="row">
        <div className="col-lg-6">
          <UploadFiles />
        </div>
        <div className="col-lg-6">
          <InputBox />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
