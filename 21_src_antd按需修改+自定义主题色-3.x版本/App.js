import React,{Component} from "react";
import { Button,DatePicker } from 'antd';
import {WechatOutlined,WeiboSquareOutlined,DownloadOutlined} from "@ant-design/icons"

const { RangePicker } = DatePicker;

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Primary Button</Button>
        <Button type="link">Primary Button</Button>
        <WechatOutlined />
        <WeiboSquareOutlined />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} >Download</Button>
        <br/>
        <br/>
        <DatePicker />
        <RangePicker />
      </div>
    )
  }
}
/*
antd的按需引入+自定义主题
1.安装依赖 npm install react-app-rewired customize-cra babel-plugin-import less less-loader
2.修改package.json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
3.根目录下创建config-overrides.js
配置具体修改规则
const {override,fixBabelImports,addLessLoader} = require("customize-cra");
module.exports = override(
  fixBabelImports("import",{
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    lessOptions:{
      javascriptEnabled: true,
      modifyVars: {"@primary-color": "#2ce62c"}
    }
  })
);
*/
