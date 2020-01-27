import React from 'react';


const Page = (props) => {
    // console.log(props.results)
    // const { results }= props;
    console.log(props.results)

    const { results } = props;
    const isEmpty = results.length === 0;

    return (
        <div className="row" style={{justifyContent:'space-evenly'}}>

            {isEmpty ?
                <h2 className="mt-5"> Loading... </h2>
                :
                results.map(pokemon =>

                    <div key={pokemon.id} className="card col-sm-3 mt-5 mr-5" style={{width: '18rem'}}>
                        <img src={pokemon.sprites.front_default} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{pokemon.name}</h5>

                            {/* TODO: create make a functional detail for each pokemon */}
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            {/* <button onClick={()=>{goTo(`/details/${pokemon.id}`)}} style={{cursor:'pointer'}} className="btn btn-primary">Details</button> */}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Page;