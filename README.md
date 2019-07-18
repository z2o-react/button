# button

React Button component

![https://www.npmjs.com/package/@z2o/button](https://img.shields.io/npm/v/@z2o/button.svg)
![https://www.npmjs.com/package/@z2o/button](https://img.shields.io/npm/dm/@z2o/button.svg)
![https://github.com/z2o-react/button/blob/master/LICENSE](https://img.shields.io/github/license/z2o-react/button.svg)


## API

name | type | default | description
--- | --- | --- | ---
prefixCls | string | `z2o-button` | 类名前缀
className | string | - | 为button添加额外的类名
style | Object | {} | 为button添加style
type | string | `default` | `primary`、 `danger`、 `success`
size | string | `medium` | `large`、 `small`
block | Boolean | `false` | 是否以块级元素的形式展开
href | string | - | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
target | string | - | 相当于 a 链接的 target 属性，href 存在时生效
htmlType | string | `button` | 原生的 type 值 
disabled | Boolean | `false` | 禁用
loading | Boolean | `false` | 是否加载中状态
outline | Boolean | `false` | 边框有颜色，内部没有颜色
onClick | (event) =>  | - | 点击按钮时的回调


支持原生 button 的其他所有属性，除了上表中的属性，其它属性都会直接传到原生 button 上。
