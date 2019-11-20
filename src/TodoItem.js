import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.delItem = this.delItem.bind(this)
    }

    render() {
        return (
            <li onClick={this.delItem}>
                {this.props.name + this.props.item}
            </li>
        );
    }

    delItem() {
        console.log(this.props.index)
        this.props.del(this.props.index)
    }
}

// 父组件传值校验
TodoItem.prototypes = {
    name:PropTypes.string.isRequired,
    item:PropTypes.string.isRequired,
    index:PropTypes.number,
    delItem:PropTypes.func
}
// 默认值
TodoItem.defaultProps  = {
    name:'windy'
}

export default TodoItem;