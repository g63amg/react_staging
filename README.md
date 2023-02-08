一、todoList案例相关知识点
1.拆分组件、实现静态组件，注意：className、style的写法
2.动态初始化列表，如何确定将数据放在哪个组件的state中？
    某个组件使用：放在其滋生的state中
    某些组件使用：放在他们共同的父组件state中
3.关于父子之间通信：
    1.父组件给子组件传递数据：通过props传递
    2.子组件给父组件传递数据：通过props传递，要求父提前给子传递一个函数
4.注意defaultChecked的区别，类似的还有：defaultValue和value
5.状态在哪里，操作状态的方法就在哪里

axios
1.安装json-server  https://github.com/typicode/json-server
npm install -g json-server

2.创建db.json文件
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

3.在db.json文件的目录下执行json-server --watch db.json 来启动服务

项目中安装axios
npm install axios

<script src="https://cdn.bootcdn.net/ajax/libs/axios/1.2.3/axios.min.js"></script>

脚手架配置代理：
1.在package.json 里做配置"proxy":"http://localhost:3000" 然后停一下脚手架，重启，但不能配置多个代理
数据交互跨域问题
比如http://localhost:3000/想要请求 http://localhost:5000/上的数据，就存在跨域问题，
这个请求的过程：3000可以把请求发送出去，但是5000返回来的数据无法接收，产生跨域的本质问题是因为ajax引擎的同源策略
这时候要找个中间人（代理服务器，也是开在3000端口上），代理服务器没有ajax引擎，可以请求转发

2.编写setupProxy.js配置具体代理规则

ES6小知识点
const {a} = obj  传统结构赋值
const {a:{b}} = obj  连续结构赋值
const {a:{b:value}} = obj  连续结构赋值+重命名