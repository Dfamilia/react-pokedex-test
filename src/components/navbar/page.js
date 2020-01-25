import React from 'react';

const Page = (props) => {
    // Navbar props
    const { 
        goTo,
        onChangeText,
    } = props;

    onChangeThis (e){
        onChangeText(e.target.value);
    }

    // Navbar state
    const state = {
        text: ''
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <span className="navbar-brand" style={{cursor:'pointer'}} onClick={()=>{goTo('/resuts')}}>Home</span>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <span className="nav-link" style={{cursor:'pointer'}} onClick={()=>{goTo('/about')}}>About <span className="sr-only">(current)</span></span>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onChangeThis(event)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Page;