import React from 'react';

const Page = (props) => {
    return (
        <div className="card text-center mt-5">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button onClick={()=>{props.goTo('/home')}} className="btn btn-danger">Go Back</button>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    )
}

export default Page;