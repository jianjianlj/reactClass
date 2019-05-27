import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import App from '../App';
import Todos from '../pages/classmodels/needTodos/index.js';
import FinishedTodos from '../pages/classmodels/finishedTodos/index.js';
// import { observable, computed, autorun } from "mobx";
import { Provider } from 'mobx-react';
import store from '../store/store.js';

const newStore = new store();

export default class Router extends React.Component{
    render(){
        return(
            <Provider  newStore={newStore}>
                <HashRouter>
                    <App>
                        <Route exact={true}path="/" component={Todos}/> 
                        <Route path="/finshedTodos" component={FinishedTodos}/> 
                    </App>
                </HashRouter>
            </Provider>
        );
    }
}