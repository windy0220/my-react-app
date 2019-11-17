import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.delItem = this.delItem.bind(this)
    }

    render() {
        return (
            <div onClick={this.delItem}>
                {this.props.item}
            </div>
        );
    }

    delItem() {
        console.log(this.props.index)
        this.props.del(this.props.index)
    }
}

export default TodoItem;