import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import {observer,inject} from "mobx-react";
import './index.css';
// import {observable,action,computed,autorun} from "mobx";


@inject(['newStore']) @observer  //inject 注入需要的store
class NeedTodos extends Component {
    
    constructor (props) {
        super(props);
        this.store=this.props.newStore;  //通过props来导入访问已注入的store
        this.finishedTodos=this.store.finishedTodos.bind(this.store)  //访问store中的事件
    }

    render() {
        return (
        <div className="todos">
            <div className="header">计划列表:</div>
            <ul>
                {this.store.todos.map(todo=>{
                    return <li key={todo.id}>
                    <span className="todoItem">{todo.item}</span>
                    <span className="todosChecked" onClick={this.finishedTodos.bind(this.store,todo.id)}>
                        <Icon className="icon" type={todo.checked ? "check-circle" : "close-circle"} theme="twoTone" twoToneColor={todo.checked ? "red"  :"#52c41a"} />
                    </span>
                    </li>
                })}
            </ul>
            <div className="finished">{this.store.num}个计划已完成</div>
            <div className="unfinished">{this.store.cnt}个计划未完成</div>
            <div className="completeDegree">完成度：{this.store.num}/{this.store.todos.length}</div>
            <div className="result"> <Link to="/finshedTodos">result</Link></div>
        </div>
        );
    }
}

export default NeedTodos;