import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
} from "react-router-dom";
import Navbar from './navbar';
import BasePage from './pages/basepage';
import { items as NavItems } from './navbar/navItems';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/">
                    <Navbar items={NavItems} />
                </Route>
                <Route exact path="/" component={BasePage}/>
                <Route path="/:page" component={BasePage}/>
            </BrowserRouter>
        )
    }
}

export default Router;