import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes , Route } from 'react-router';
import {Body} from './Body';
import {Header} from './Header';
import { Home } from './home';
import { Product1 } from './Product1';
import './main.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { Slider } from './slider';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col  } from 'react-bootstrap';
store.subscribe(()=> console.log(store.getState()))
const App = () => {
  return(
    <div>
       <Provider store={store}>
       <Router>
       <Header />
      <Switch>
       <Route path='/' exact><Home /></Route>
       <Route path='/Product'><Product1 /></Route>
       </Switch>
       </Router>
       </Provider>
    </div>
  );
}
export default App;
