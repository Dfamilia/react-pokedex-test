import React, { Component, Fragment } from 'react';
import Page from './page';
import Navbar from '../navbar';
import { fetchPokemonsResouces } from '../../services/pokemonsData';


class Results extends Component {
    state = {
        pokemonList: '',
        isLoading: false,
    }

    componentDidMount() {

        async function exeFetch() {
            let res = await fetchPokemonsResouces();
            console.log(res)
        }
        exeFetch()
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                <Page />
            </Fragment>
        )
    }
}

export default Results;