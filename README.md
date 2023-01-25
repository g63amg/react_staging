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