import React, { Component, Fragment } from 'react';
import Page from './page';
import Navbar from '../navbar';

class About extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Page />
            </Fragment>
        )
    }
}

export default About;