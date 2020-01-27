import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import findResults from '../../redux/actions/findResults';
import Page from './page';


class Navbar extends Component {

    

    // // each text's change makes an action
    // onChangeText= (text) => {
    //     // this.props.findResults(text);
    // }

    // each text's change this component state
    // onChangeText = text =>{

    //     this.setState({text})
    // }

    

    goTo=(path)=>{
        this.props.history.push(path);
    }

    render() {
 
        return (
            <div>
                <Page goTo={this.goTo}   />
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