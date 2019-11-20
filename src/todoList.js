import React, { Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            todoList: ['写禅道', '学习go']
        }
    }

    componentDidMount() {
        axios.get('http://rap2api.taobao.org/app/mock/237360/example/1574265556809')
            .then((res) => { console.log('axios 获取数据成功:',res) })
            .catch((error) => { console.log('axios 获取数据失败',error) })
    }

    render() {
        console.log('render---组件挂载中.......')
        return (
            <Fragment>
                <label htmlFor="todoinput">添加待办</label>
                <input className="input" id="todoinput" value={this.state.inputValue} onChange={this.changeSubButton.bind(this)} />
                <button onClick={this.addList.bind(this)}>添加待办</button>
                <ul ref={ul => { this.ul = ul }}>
                    {
                        this.state.todoList.map((item, index) => {
                            return (
                                <TodoItem
                                    key={item + index}
                                    item={item}
                                    index={index}
                                    del={this.delItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    changeSubButton(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            todoList: [...this.state.todoList, this.state.inputValue],
            inputValue: ''
        }, () => {
            // setState 是一个异步，这里可以加一个函数，用于setState执行结束后执行。
            console.log(this.ul.querySelectorAll('li').length)
        })
    }
    delItem(index) {
        let list = this.state.todoList
        list.splice(index, 1)
        this.setState({
            todoList: list
        })
    }
}

export default Todo