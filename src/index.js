import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// components 
import About from './components/about';
import Details from './components/details';
import Results from './components/results';


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/details/:id" component={Details} />
                    <Route path="/home" component={Results} />
                    <Route path="/about" component={About} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));