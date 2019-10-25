import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import Item from './item';
import './nav.scss';

class Navbar extends Component {
    state = {
        width: '5rem'
    }
    

    expandNav = () => {
        this.setState({width: '400px'});
    }

    collapseNav = () => {
        this.setState({width: '5rem'});
    }

    render() {
        const { items } = this.props;

        return (
            <IconContext.Provider value={{color: 'white', size: '2rem'}}>
                <div 
                    className="navbar"
                    style={{width: this.state.width}}
                    onMouseEnter={this.expandNav}
                    onMouseLeave={this.collapseNav}
                >   
                    <div className="navbar__home">
                        <Link to="/">PEGA</Link>
                    </div>
                    {
                        items.map(item => {
                            return <Item {...item} key={item.text}/>
                        })
                    }
                </div>
            </IconContext.Provider>
        )
    }
}

export default Navbar;