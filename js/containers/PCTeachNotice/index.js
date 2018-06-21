import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { Card } from 'antd';

import { Link } from 'react-router-dom';

export default class PCTeachNotice extends React.Component{
    constructor(){
        super();
        this.state = {
            hasLogin: false,
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
    }
    handleClick(){
        alert("!");
    }
    render(){
        const gridStyle = {
            width: '33.33%',
            textAlign: 'center',
        };
        return (
            this.state.hasLogin ?
            <article className="pcteachnotice">
                <Nav hasLogin={this.state.hasLogin}/>
                <section className="pcteachnotice">
                    <img src="/img/dt.gif" />
                    <Card title="近期通知">
                        <Card.Grid style={gridStyle}><Link to="/teach_manage/notice/content">开学家访通知</Link></Card.Grid>
                        <Card.Grid style={gridStyle}><Link to="/teach_manage/notice/content">第二周活动邀请</Link></Card.Grid>
                        <Card.Grid style={gridStyle}><Link to="/teach_manage/notice/content">第二周活动负责人公示</Link></Card.Grid>
                        <Card.Grid style={gridStyle}><Link to="/teach_manage/notice/content">第五周运动会通知</Link></Card.Grid>
                        <Card.Grid style={gridStyle}><Link to="/teach_manage/notice/content">五一节致家长的一封信</Link></Card.Grid>
                        <Card.Grid style={gridStyle}><Link to="/teach_manage/notice/content">第十一周家长会通知</Link></Card.Grid>
                        <Card.Grid style={gridStyle}><Link to="/teach_manage/notice/content">第十一周家长会名单确定</Link></Card.Grid>
                        <Card.Grid style={gridStyle}><Link to="/teach_manage/notice/content">更多</Link></Card.Grid>
                        <Card.Grid style={gridStyle}>……</Card.Grid>
                    </Card>
                    <img src="/img/dt1.gif" />
                </section>
            </article>
                :
                <article className="jiaowuxinxiang">
                    <Nav hasLogin={this.state.hasLogin}/>
                    <p class="hasntLoginp">您没有登录！</p>
                </article>
        )
    }
}