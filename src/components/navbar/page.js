import React from 'react';

const Page = (props) => {
    // Navbar props
    const { 
        goTo,
        onChangeText,

    } = props;

    const onChangeThis=(e)=> {
        e.preventDefault();
        onChangeText(e.target.value);
        // console.log(e.target.value)
    }
    
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <span className="navbar-brand" style={{cursor:'pointer'}} onClick={()=>{goTo('/resuts')}}>Home</span>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <span className="nav-link" style={{cursor:'pointer'}} onClick={()=>{goTo('/about')}}>About <span className="sr-only">(current)</span></span>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={(e)=>{e.preventDefault()}}>
                    <input className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"  onChange={(e)=>{onChangeThis(e)}} />
                </form>
            </div>
        </nav>
    );
}

export default Page;