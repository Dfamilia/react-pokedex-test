import React, { Component, Fragment } from 'react';
import Page from './page';
import Navbar from '../navbar';
// import { fetchPokemonsResouces } from '../../services/pokemonsData';
// import addService from '../../redux/actions/addService';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Results extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         pokemonList: '',
    //         isLoading: false,
    //     }
    // }

    //FIXME:  this method try to use a Pokemon resource (state: failure)
    // componentDidMount() {


    //     // send data from /Service to Redux
    //     let current = this;
    //     async function exeFetch() {
    //         let res = await fetchPokemonsResouces();
    //         await current.setState({ pokemonList: res })

    //     }
    //     exeFetch()
    // }

    // path's handler
    goTo=(path)=>{
        this.props.history.push(path);
    }

    render() {
        // redux to props
        const {
            // addService,
            results,
        } = this.props;

        // console.log("state", this.state.pokemonList)
        // addService(this.state.pokemonList)
        // 
        return (
            <Fragment>
                <Navbar />
                <Page results={results} goTo={this.goTo} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

// const mapDispatchToProps = {
//     addService,
// }

export default withRouter(connect(mapStateToProps)(Results));