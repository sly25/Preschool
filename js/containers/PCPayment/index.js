import React from 'react';

import './style.less';

import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';

export default class PCPayment extends React.Component{
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
            <article className="pcpayment">
                <header>
                    <div className="jbxx">
                        <h3>基本信息</h3>
                        <p> 姓名：黄丽敏</p><p>班级：中 1班</p>
                    </div>
                    <div className="xsjf">
                        <h2><Link to="/payment/jf">学生缴费</Link></h2>
                    </div>
                </header>
                <section className="pxsbxc">
                <div className="pxsbx k1"></div>
                <div className="pxsbx k2"></div>
                <div className="pxsbx twoheight k3">
                    <ul><span>公告</span>
                        <li><Link to="/teach_manage/notice/content">2018年下半年度收费结算通知</Link></li>
                        <li><Link to="/teach_manage/notice/content">2018年下半年扣款计划通知</Link></li>
                        <li><Link to="/teach_manage/notice/content">2018年下半年度缴费工作安排通知</Link></li>
                        <li><Link to="/teach_manage/notice/content">2018年扣款事件通知</Link></li>
                    </ul>
                </div>
                <div className="pxsbx k4"></div>
                <div className="pxsbx sf k5"></div>
                <div className="pxsbx sf sf2 k6">
                    <p><Link to="/payment/xfcx">学费查询</Link></p>
                </div>
                <div className="pxsbx k7">
                    <p><Link to="/payment/sjcx">缴费收据查询</Link></p>
                </div>
                <div className="pxsbx k8"></div>
                <div className="pxsbx k9"></div>
                <div className="pxsbx sf3 k10"></div>
                <div className="pxsbx k11"></div>
            </section>
            </article>
        )
    }
}