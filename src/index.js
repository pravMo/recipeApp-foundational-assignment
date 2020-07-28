import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NA from './errors/NA';
import App from './views/App';
import Home from './search/Home';
import Search from './details/Search';
import ErrorNone from './errors/ErrorNone';
import Details from './details/Details';

ReactDOM.render(

  <Router>
    <App>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/searched/:query' component={Search} />
      <Route exact path='/mealDetails/:name' component={Details} />
      <Route exact path='/errorNone' component={ErrorNone} />
      <Route component={NA} />
      </Switch>
    </App>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
