import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/*const users=[
    {username:'Jerry',age:21,gender:'male'},
    {username:'Tomy',age:22,gender:'male'},
    {username:'Lily',age:19,gender:'female'},
    {username:'Lucy',age:20,gender:'female'}
]*/

/*class Index extends Component{
    render(){
        const usersElements = [];   //保存每个用户渲染之后的JSX数组
        for(let user of users){
            usersElements.push(
                <div>
                    <div>姓名：{user.username}</div>
                    <div>年龄：{user.age}</div>
                    <div>性别：{user.gender}</div>
                    <hr/>
                </div>
            )
        }
        return (
            <div>{usersElements}</div>
        )
    }
}*/

/*class Index extends Component{
    render(){
        return (
            <div>
                {users.map((user)=>{        //()=>括号里面的是参数，后面跟着函数体
                    return (
                        <div>
                            <div>姓名：{user.username}</div>
                            <div>年龄：{user.age}</div>
                            <div>性别：{user.gender}</div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
*/

/*class User extends Component{
    render(){
        const {user} = this.props
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr/>
            </div>
        )
    }
}

class Index extends Component{
    render(){
        return (
            <div>
                {users.map((user,i)=> <User key={i} user={user}/>)}
            </div>
        )
    }
}
*/

/*class Header extends Component{
    constructor(){
        super();
        console.log('construct')
    }
    //componentWillMount在render之前调用，也就是在组建挂载之前调用
    componentWillMount(){
        console.log('component will mount')
    }
    //componentDidMount在render之后调用，也就是在DOM元素插入页面之后调用
    componentDidMount(){
        console.log('component did mount')
    }
    //组件对应的DOM元素从页面中删除之前调用
    componentWillUnmount(){
        console.log('component will unmount')
    }
    render(){
        console.log('render')
        return (
            <div>
                <h1 className="title">React小书</h1>
            </div>
        )
    }
}


class Index extends Component{
    //一般来说，所有关于组件自身的状态的初始化工作都会放在 constructor 里面去做
    constructor(){
        super();
        this.state = {
            isShowHeader:true
        }
    }
    handleShowOrHide(){
        this.setState({
            isShowHeader:!this.state.isShowHeader
        })
    }
    render(){
        return(
            <div>
                {this.state.isShowHeader ? <Header /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏标题
                </button>
            </div>
        )
    }
}
*/

/*class Clock extends Component{
    constructor(){
        super();
        this.state={
            date:new Date()
        }
    }
    //一些组件启动的动作，包括像 Ajax 数据的拉取操作
    // 一些定时器的启动等，就可以放在 componentWillMount 里面进行
    //例如ajax
   /* componentWillMount(){
        ajax.get('http://json-api.com/user',(userData)=>{
            this.setState({userData})
        })
    }*/
/*
    componentWillMount(){
        this.timer = setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

class Index extends Component{
    constructor(){
        super();
        this.state = {isShowClock:true}
    }
    //这是控制台报错了，定时器的回调函数还在不停地尝试 setState，
    // 由于 setState 只能在已经挂载或者正在挂载的组件上调用，所以 React.js 开始疯狂报错
    //这时componentWillUnmount就派上用场，
    // 它的作用就是在组件销毁的时候，做这种清场的工作。例如清除该组件的定时器和其他的数据清理工作
    handleShowOrHide(){
        this.setState({
            isShowClock:!this.state.isShowClock
        })
    }
    render(){
        return(
            <div>
                {this.state.isShowClock?<Clock />:null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏时钟
                </button>
            </div>
        )
    }
}*/

/*class AutoFocusInput extends Component{
    componentDidMount(){
        this.input.focus()
    }
    //我们可以给任意代表 HTML 元素标签加上 ref 从而获取到它 DOM 元素然后调用 DOM API。
    // 但是记住一个原则：能不用 ref 就不用。
    render(){
        return(
        <input ref={(input) => this.input = input}/>
        )
    }
}
*/

/*class Card extends Component {
    //使用自定义组件的时候，可以在其中嵌套 JSX 结构。
    // 嵌套的结构在组件内部都可以通过 props.children 获取到，
    // 这种组件编写方式在编写容器类型的组件当中非常有用。
    render(){
        return(
            <div className="card">
                <div className="card-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}*/

class Editor extends Component{
    constructor(){
        super();
        this.state = {
            content:'<h1>React.js 小书</h1>'
        }
    }
    render(){
        //需要给 dangerouslySetInnerHTML 传入一个对象，
        // 这个对象的 __html 属性值就相当于元素的 innerHTML，
        // 这样我们就可以动态渲染元素的 innerHTML 结构了。
        return (
            <div className="editor-wrapper"
                 dangerouslySetInnerHTML={{__html:this.state.content}}>
            </div>
        )
    }
}

ReactDOM.render(
    <Editor />,
    document.getElementById('root')
)
/*ReactDOM.render(
    //<Header />,
    //<Index />,
    //<AutoFocusInput />,
    <Card>
        <h2>React.js 小书</h2>
        <div>开源、免费、专业、简单</div>
        订阅：<input />
    </Card>,
    document.getElementById('root')
)*/
