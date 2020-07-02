import React, { Fragment } from 'react';
import { Switch,Route } from 'react-router-dom';
import {LoginPage}  from './LoginPage';
import UploadFiles from './UploadFiles';
import {ALMDataTable}  from './ALMDataTable';



 const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <Route path="/upload" component={UploadFiles} exact/>
            <Route path="/almdata" component={ALMDataTable} exact/>
            
        </Switch>
    )
}
export default AppRouter;