import React, { Component } from 'react';
import './basepage.scss';

class BasePage extends Component {
    pages = {
        home: 'Home',
        bugs: 'Bugs',
        epics: 'Epics',
        dashboard: 'My Dashboard',
        documents: 'Documents',
        spaces: 'Spaces',
        goals: 'Goals'
    }

    getPageText() {
        const page = this.props.match.params.page;
        const pageText = this.pages[page ? page : 'home'];
        return pageText ? pageText : '404';
    }

    render() {
        return (
            <div className='base-page'>
                <h1>{this.getPageText()}</h1>
            </div>
        )
    }
}

export default BasePage;