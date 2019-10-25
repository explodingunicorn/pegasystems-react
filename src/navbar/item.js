import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle, FaPlus } from 'react-icons/fa';

import Icon from './icon';

class Item extends Component {
    state = {
        open: false
    }

    toggleOpen = () => {
        this.setState({open: !this.state.open});
    }
    render() {
        const { icon, text, link, subItems } = this.props;
        return (
            <>  
                <div className="navbar__item">
                    <div className="navbar__item__icon">
                        {
                            subItems ? (
                                this.state.open ? <FaTimesCircle/> : <FaPlus/>
                            ) : <Icon type={icon}/>
                        }
                    </div>
                    <div className="navbar__item__title">
                        {
                            subItems ? (
                                <button onClick={this.toggleOpen}>{text}</button>
                            ) : (
                                <Link to={`/${link}`}>
                                    <button>{text}</button>
                                </Link>
                            )
                        }
                    </div>
                </div>
                {
                    subItems ? (
                        <div
                            className="navbar__expandable"
                            
                        >   
                            <div 
                                className="navbar__expandable__items"
                                style={{flexGrow: this.state.open ? '1' : '0.000001', height: this.state.open ? 'auto' : 0}}
                            >
                                {
                                    subItems.map(subItem => {
                                        return <p key={subItem}>{subItem}</p>
                                    })
                                }
                            </div>
                        </div>
                    ) : null
                }
            </>
        )
    }
}

export default Item;