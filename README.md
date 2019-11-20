#### react 学习手记

## vs code 插件 Simple React Snippets
imrc
```
import React, { Component } from 'react';
```

cc
```
class  extends Component {
    state = {  }
    render() { 
        return (  );
    }
}
 
export default ;
```
rcc 生成上面两个

## jsx一些坑
`<label>` 中的for 要写 `htmlFor`

样式class 要写 `className`

要想输出 html 使用 `dangerouslySetInnerHTML={{__html:item}}` 

``` html
<li 
    key={index+item}
    onClick={this.deleteItem.bind(this,index)}
    dangerouslySetInnerHTML={{__html:item}}
>
</li>

有点类似 vue 中的 v-html
```

## 父子组件传值

父组件通过自定义属性传值给子组件 

```html
<TodoItem 
    key={item+index}
    item={item}
    index={index}
    del={this.delItem.bind(this)}
/>
```

子组件 通过 this.props.** 接收

```html
<div onClick={this.delItem}>
    {this.props.item}
</div>
```

子组件不能直接给父组件传值，这点类似vue. 需要通过一个方法，调用父组件里的方法

```html
<!-- 子组件元素定义 -->
<div onClick={this.delItem}>
    {this.props.item}
</div>

<!-- 子组件方法 this.props.del 为父组件传递的方法-->
delItem() {
    this.props.del(this.props.index) 
}

<!-- 父组件接受方法 -->
<TodoItem 
    del={this.delItem.bind(this)}
/>

<!-- 父组件方法 -->
delItem(index) {
    todo anything...
}
```

## 校验传递值 PropTypes
子组件引入 PropTypes
impt
```javascript
import PropTypes from 'prop-types';
```

类型校验
```javascript
TodoItem.prototypes = {
    index:PropTypes.number,
    delItem:PropTypes.func
}
```

必传校验
```javascript
TodoItem.prototypes = {
    name:PropTypes.string.isRequired,
    item:PropTypes.string.isRequired
}
```

默认值传递

```javascript
TodoItem.defaultProps  = {
    name:'windy'
}
```

## ref

jsx 中可以使用ref 赋值，方便函数中调用

```html
<ul ref={ul => {this.ul = ul}}>
    <li></li>
    <li></li>
</ul>
```

```javascript
console.log(this.ul.querySelectorAll('li').length)
```

## setState 异步执行的回调函数

this.setState 是一个异步方法。可以传入一个回调函数

```javascript
this.setState({
    inputValue: ''
},()=>{
    console.log(this.ul.querySelectorAll('li').length)
})
```

## 生命周期

组件挂载周期 Mounting
```javascript
//组件将要挂载到页面的时刻 改函数在v17要被移除
UNSAFE_componentWillMount(){}

//组件挂载中
render(){}

//组件挂载完成
componentDidMount(){}

```

组件数据改变周期 Updation

```javascript
//只在子组件中起作用
componentWillReceiveProps(){}


//组件发生改变前执行 必须返回一个布尔值，若为false 则不执行之后的生命周期
//nextProps:变化后的属性;
//nextState:变化后的状态;
// 可用于性能优化 但官方推荐 PureComponent
shouldComponentUpdate(nextProps,nextState){
    return nextProps.content !== this.props.content
}

//组件更新前，shouldComponentUpdate函数之后执行
componentWillUpdate(){}

//开始挂载渲染
render(){}

//组件更新之后执行
componentDidUpdate(){}

```

组件被删除 Unmounting
```javascript
//组件被卸载前执行
componentWillUnmount(){}
```

[组件的生命周期](https://zh-hans.reactjs.org/docs/react-component.html#the-component-lifecycle)

## Axios
```javascript
npm install -save axios
```

```javascript
import axios from 'axios'

// 这个生命周期函数只会挂载一次
componentDidMount(){
    axios.post('https://apiurl.com')
        .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
}
```
