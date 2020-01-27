import React, { Component, Fragment } from 'react';
import Page from './page';
import Navbar from '../navbar';
import { fetchPokemonsResouces } from '../../services/pokemonsData';
// import addService from '../../redux/actions/addService';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: '',
            isLoading: false,
        }
    }

    // FIXME:  this method try to use a Pokemon resource (state: failure)
    componentDidMount() {


        // send data from /Service to Redux
        let current = this;
        async function exeFetch() {
            let res = await fetchPokemonsResouces();
            await current.setState({ pokemonList: res })
        }
        exeFetch()
    }

    // path's handler
    goTo=(path)=>{
        this.props.history.push(path);
    }

    onSelectText = text =>{
        console.log("onSelectText", text)
    }

    render() {
        // redux to props
        // const {
        //     addService,
        //     results,
        //     service,
        // } = this.props;

        // addService({results: this.state.pokemonList})
        // 
        return (
            <Fragment>
                <Navbar onSelectText={this.onSelectText}/>
                <Page results={this.state.pokemonList} goTo={this.goTo} onSelectText={this.onSelectText}/>
            </Fragment>
        )
    }
}

// const mapStateToProps = 
//  state => {
//     console.log('Datos', state.results)
//     return {
//         results: state.results,
//         service: state.service,
//     }
// }

// const mapDispatchToProps = {
//     addService,
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));
export default withRouter(Results);