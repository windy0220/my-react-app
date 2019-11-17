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
