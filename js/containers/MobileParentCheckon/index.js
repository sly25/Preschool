import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

import { DatePicker } from 'antd';

export default class MobileParentCheckon extends React.Component{
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
    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render(){
        let content;
        if(!this.state.hasLogin){
            content = '您没有登录！';
        } else if (!this.state.roleid){
            content = '您没有权限！';
        }
        return (
            content ?
                <article className="jiaowuxinxiang">
                    <Link to="/">
                        <div className="backtohome"></div>
                    </Link>
                    <p class="hasntLoginp">{content}</p>
                </article>
                :
                <article className="pcparentcheckon mobileparentcheckom">
                    <Link to="/">
                        <div className="backtohome"></div>
                    </Link>
                    <div class="two">
                        <ul>
                            <li>2018-4-31 am<br/>
                                <strong>已到</strong>
                            </li>
                            <li>2018-4-29 pm<br/>
                                <strong>已到</strong>
                            </li>
                            <li className=""><DatePicker onChange={this.onChange}/></li>
                        </ul>
                    </div>
                    <div class="three">
                        <p>2018年3月考勤统计</p>
                        <ul>
                            <li>
                                <p>第一周</p><br/>
                                <span>满勤</span>
                                <div></div>
                            </li>
                            <li>
                                <p>第二周</p><br/>
                                <span>满勤</span>
                                <div></div>
                            </li>
                            <li>
                                <p>第三周</p><br/>
                                <span>满勤</span>
                                <div></div>
                            </li>
                            <li>
                                <p>第四周</p><br/>
                                <span>满勤</span>
                                <div></div>
                            </li>
                        </ul>
                    </div>
                </article>
        )
    }
}