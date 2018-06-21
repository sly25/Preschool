import React from 'react';

import './style.less';

import { post } from '../../fetch/post';

import Nav from '../../components/Nav';

export default class PCLogin extends React.Component{
    constructor(){
        super();
        this.state = {
          hasLogin : false,
        };
    }
    componentDidMount(){
        console.log(document.cookie.indexOf('username'))
        console.log(document.cookie);
        if(document.cookie.indexOf('username') !== -1){
            this.setState({
                hasLogin : true,
            })
        }
    }
    handleLogin(){
       post('/api/login',{username:this.refs.username.value,password:this.refs.password.value}).then( res => {
           // console.log(typeof(res));
           if(res.length<9) {
               alert(res);
               this.setState({hasLogin: false});
           } else {
               // console.log(JSON.parse(res))
               let user = JSON.parse(res);
               alert(`${user.username},登陆成功！`);
               this.setState({hasLogin : true});
               document.cookie = `username=${user.username}`;
               document.cookie = `roleid=${user.roleid}`;
               // this.forceUpdate();
           }
       });
    }
    handleexit(){
        this.setState({
            hasLogin : false,
        });
        document.cookie="username=0; expires=Thu, 26 Feb 2016 11:50:25 GMT;";
        document.cookie="roleid=0; expires=Thu, 26 Feb 2016 11:50:25 GMT;";
        // this.forceUpdate();
    }
    render(){
        return (
            <section className="PClogin">
                <img className="beijing" src="../../../img/jianbian.jpeg" />
                <Nav hasLogin={this.state.hasLogin} />
                <div className="loginpage">
                    <i className="icon-accessibility"></i><br />
                    <p>幼教交互平台</p>
                    {/*<hr />*/}
                    {this.state.hasLogin ?
                        <button onClick={this.handleexit.bind(this)}>退出登录</button>
                        :
                        <div>
                            <i className="icon-user small"></i>
                            <input type="text" id="name" placeholder="username" ref="username"/><br/>
                            <i className="icon-key small"></i>
                            {/*<hr />*/}
                            <input type="password" id="password" placeholder="password" ref="password"/><br/>
                            <button onClick={this.handleLogin.bind(this)}>登录</button>
                        </div>
                    }
                </div>
            </section>
        )
    }
}