import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { DatePicker } from 'antd';

export default class PCParentCheckOn extends React.Component{
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
                    <Nav hasLogin={this.state.hasLogin}/>
                    <p class="hasntLoginp">{content}</p>
                </article>
                :
            <article className="pcparentcheckon">
                <Nav hasLogin={this.state.hasLogin}/>
                {/*<header className=>*/}
                {/*/!*<p>C站&nbsp;&nbsp;/&nbsp;&nbsp;个人报表&nbsp;&nbsp;/&nbsp;&nbsp;文件一&nbsp;&nbsp;/&nbsp;&nbsp;<span>文档一</span></p>*!/*/}
                {/*</header>*/}
                <div class="two">
                    <ul>
                        <i></i>
                        <li>2018-4-29 am<br/>
                            <strong>已到</strong>
                        </li>
                        <li>2018-4-29 pm<br/>
                            <strong>已到</strong>
                        </li>
                        <li>2018-4-30 am<br/>
                            <strong>已到</strong>
                        </li>
                        <li>2018-4-30 pm<br/>
                            <strong>已到</strong>
                        </li>
                        <li>2018-4-31 am<br/>
                            <strong>已到</strong>
                        </li>
                        <li>2018-4-29 pm<br/>
                            <strong>已到</strong>
                        </li>
                        <i></i>
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
                <div className="five">
                    <div className="title">请假</div>
                    <p><span>标题:</span>&nbsp;&nbsp;<input type="text" className="qingjiabiaoti"/></p>
                    <p><span>时间:</span>&nbsp;&nbsp;<input type="text" className="qingjiabiaoti"/></p>
                    <p><span>班主任:</span>&nbsp;&nbsp;&nbsp;<input type="text" className="qingjiabiaoti"/></p>
                    <p><span>请假原因:</span><br/>&nbsp;&nbsp;<textarea rows="4" cols="70"
                                                                    className="qingjiayuanyin"/>
                    </p>
                    {/*<input type="checkbox" id="checkbox" /><p>遵守保密协议</p>*/}
                    <input type="button" className="tijiao" value="提交"/>
                </div>
            </article>
        )
    }
}