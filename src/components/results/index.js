import React, { Component, Fragment } from 'react';
import Page from './page';
import Navbar from '../navbar';
import { fetchPokemonsResouces } from '../../services/pokemonsData';
import addService from '../../redux/actions/addService';
import findResults from '../../redux/actions/findResults';
import { connect } from 'react-redux';


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
                <Page results={results} />
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

export default connect(mapStateToProps)(Results);