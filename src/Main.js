import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        
    </Switch>
);

export default Main;