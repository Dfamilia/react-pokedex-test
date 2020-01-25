import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connet } from 'react-redux';
import Page from './page';

class Navbar extends Component {

    
    onChangeText(text) {
        this.props.findResults(text);
    }

    render() {
        const { history }= this.props;
        const goTo=(path)=>{
            history.push(path);
        }

        return (
            <div>
                <Page goTo={goTo} onChangeText={onChangeText} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    findResults,
}
export default withRouter(connect(mapDispatchToProps)(Navbar));