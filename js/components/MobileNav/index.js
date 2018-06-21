import React from 'react';

import './style.less';

import { Link } from 'react-router-dom';

import { Button } from 'antd';

export default class MobileNav extends React.Component{
    constructor(){
        super();
        this.state = {
            hasLogin: false,
            roleid : 0,
        };
    }
    componentDidMount(){
        if(document.cookie.indexOf('username') !== -1){
            this.setState({
                hasLogin : true,
            })
        } else {
            this.setState({
                hasLogin : false,
            })
        }
        // console.log(document.cookie.slice(document.cookie.indexOf("roleid")+7,document.cookie.indexOf("roleid")+8));
        this.setState({
            roleid : parseInt(document.cookie.slice(document.cookie.indexOf("roleid")+7,document.cookie.indexOf("roleid")+8)),
        });
    }
    render(){
        let content;
        if(this.state.roleid){
            content = (<ul>
                <li><Link to="/parent/monitor">监控</Link></li>
                <li><Link to="/parent/checkon">考勤</Link></li>
                <li><Link to="/parent/payment">缴费</Link></li>
                <li className="lastli"><Link to="/notice">通知</Link></li>
            </ul>)
        }else {
            content = (<ul>
                <li><Link to="/teacher/xx">信息</Link></li>
                <li><Link to="/teacher/checkon">考勤</Link></li>
                <li><Link to="/teacher/plan">周计划</Link></li>
                <li className="lastli"><Link to="/notice">通知</Link></li>
            </ul>)
        }
        return (
            this.state.hasLogin ?
                <article className="mobilenav">
                    {content}
                </article>
                :
                <article className="mobilenav">
                    <Button><Link to="/login">登录</Link></Button>
                </article>
        )
    }
}