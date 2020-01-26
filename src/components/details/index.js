import React, { Component, Fragment } from 'react';
import Page from './page';
import Navbar from '../navbar';
import findCurrentItem from '../../redux/actions/findCurrentItem';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends Component {

    componentDidMount(){
        this.props.findCurrentItem(parseInt(this.props.match.params.id))
    }


    goTo=(path)=>{
        this.props.history.push(path)
    }

    render() {
        console.log(this.props.currentItem,this.props.match.params.id)
        return (
            <Fragment>
                <Navbar />
                <Page goTo={this.goTo}/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        currentItem: state.currentItem,
    }
}

const mapDispatchToProps ={
    findCurrentItem,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));