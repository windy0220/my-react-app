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