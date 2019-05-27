// import { observer } from "mobx-react";
import { observable, action, computed} from "mobx";

export default class NewStore {
    @observable todos; //列表数据
    @observable num; //已完成
    constructor () {
        this.num = 0;
        this.todos = [
            {
                id: 1,
                item: '起床',
                checked: false,
            },
            {
                id: 2,
                item: '刷牙洗脸',
                checked: false,
            },
            {
                id: 3,
                item: '吃早饭',
                checked: false,
            },
            {
                id: 4,
                item: '坐地铁',
                checked: false,
            },
            {
                id: 5,
                item: '在地铁上看一会书',
                checked: false,
            },
            {
                id: 6,
                item: '工作',
                checked: false,
            },
            {
                id: 7,
                item: '吃午饭',
                checked: false,
            },
        ];
    };
    @computed get cnt() {
        return this.todos.length - this.num;
    };
    @action finishedTodos (id) {//this指向this.store
        this.todos.map(todo=>{
            if(todo.id === id){
                todo.checked = !todo.checked;
                if(todo.checked ) {
                    this.num++;
                }else {
                    this.num--;
                }
            }
        });
    };
}