import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {observer,inject} from "mobx-react";
import './index.css';


@inject(['newStore']) @observer 
class FinishedTodos extends Component {
    constructor(props) {
        super(props);
        this.store=this.props.newStore;  //通过props来导入访问已注入的store
    }
    render() {
        return (
        <div className="finishedTodos">
            <div className="completePlan">完成计划数: <span>{this.store.num}</span></div>
            <div className="todosLink"> <Link  to="/">todos</Link></div>
        </div>
        );
    }
}
export default FinishedTodos;