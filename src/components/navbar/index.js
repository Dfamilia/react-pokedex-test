import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import findResults from '../../redux/actions/findResults';
import Page from './page';


class Navbar extends Component {
    
    // each text's change makes an action
    onChangeText= (text) => {
        this.props.findResults(text);
    }

    render() {
        const { history }= this.props;

        const goTo=(path)=>{
            history.push(path);
        }

        return (
            <div>
                <Page goTo={goTo} onChangeText={this.onChangeText} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

const mapDispatchToProps = {
    findResults,
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));