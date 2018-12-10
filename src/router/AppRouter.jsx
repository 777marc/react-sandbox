import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main';
import Dashboard from '../components/Dashboard';
import About from '../components/About';
import Info from '../components/Info';
import Contact from '../components/Contact';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Main />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/about" component={About} exact={true} />
                <Route path="/info" component={Info} exact={true} />
                <Route path="/contact" component={Contact} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;