import React, { Fragment } from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            todoList: ['写禅道', '学习go']
        }
    }
    render() {
        return (
            <Fragment>
                <input value={this.state.inputValue} onChange={this.changeSubButton.bind(this)} />
                <button onClick={this.addList.bind(this)}>添加待办</button>
                <ul>
                    {
                        this.state.todoList.map((item, index) => {
                            return (
                                    <li key={index + item} onClick={this.delItem.bind(this, index)}>{item}</li>

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