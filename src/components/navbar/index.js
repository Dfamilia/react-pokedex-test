import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Page from './page';

class Navbar extends Component {
    render() {
        const { history }= this.props;
        const goTo=(path)=>{
            history.push(path);
        }

        return (
            <Fragment>
                <Page goTo={goTo}/>
            </Fragment>
        )
    }
}

export default withRouter(Navbar);