import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="jumbotron">hola mundo</div>

            </div>
            Restaurantes
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));