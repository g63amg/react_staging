//引入Count的UI组件
import CountUI from "../../components/Count/Count"

//引入connect用于连接UI组件与redux
import {connect} from "react-redux"
//引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action"



/* 
1.mapStateToProps函数返回的是一个对象
2.对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件props的value
3.mapStateToProps用于传递状态,react-redux在调用mapStateToProps函数的时候已经调用过store.getState()，mapStateToProps函数里接收一下就行
*/
function mapStateToProps(state){
    return {count:state}
}

/*
1.mapDispatchToProps函数返回的是一个对象
2.对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件props的value
3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch){
    return {
        jia:(number)=>{
            dispatch(createIncrementAction(number))
        },
        jian:(number)=>{
            dispatch(createDecrementAction(number))
        },
        asyn:(number,time)=>{
            dispatch(createIncrementAsyncAction(number,time))
        }
    }
}
//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)


/*
react-redux基本使用
1.Ui组件：不能使用任何redux的api，只负责页面的呈现、交互
2.容器组件：负责和redux通信，将结果交给Ui组件
3.如何创建一个容器组件--靠react-redux的connect函数，
connect(mapStateToProps,mapDispatchToProps)：
--mapStateToProps用于传递状态，返回值是一个对象
--mapDispatchToProps用于传递操作状态的方法，返回值是一个对象
备注：容器组件中的store是靠props传进去的（在App里传给Count），而不是在容器组件中直接引入
*/
