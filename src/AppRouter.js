import React, { Fragment } from 'react';
import { Switch,Route } from 'react-router-dom';
import {LoginPage}  from './LoginPage';
import UploadFiles from './UploadFiles';



 const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" component={LoginPage} exact/>
            <Route path="/almdata" component={UploadFiles} exact/>
        </Switch>
    )
}
export default AppRouter;