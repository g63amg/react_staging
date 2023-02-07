import React, {  } from 'react'
import ReactDOM from "react-dom"

// class Demo extends Component {
//     state = {count:0}
//     render() {
//         return (
//         <div>
//             <h1>当前求和为{this.state.count}</h1>
//             <button onClick={this.add}>点我加1</button>
//         </div>
//         )
//     }
//     add = () => {
//         this.setState((state) => {return{count:state.count+1}})
//     }
// }

function Demo(){
    //react底层对这行进行了处理，不会每次点击加都拿到最开始的状态0，而是拿到当前的状态count的值
    const [count,setCount] = React.useState(0)
    const myRef = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount((count)=>{return count+1})
        }, 1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])

    function add(){
        //第一种写法
        //setCount(count+1) 
        //第二种写法
        setCount((count)=>{return count+1})
    }
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }
    function showData(){
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type="type" ref={myRef}/>
            <h1>当前求和为{count}</h1>
            <button onClick={add}>点我加1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={showData}>点我提示数据</button>
        </div>
    )
}
export default Demo
