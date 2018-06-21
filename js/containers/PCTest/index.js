import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { Table } from 'antd';

export default class PCTest extends React.Component{
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
        const columns = [{
            title: '学年',
            dataIndex: 'grade',
            key: 'grade',
        }, {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },{
            title: '身高(cm)',
            dataIndex: 'height',
            key: 'height',
        }, {
            title: '体重(kg)',
            dataIndex: 'weight',
            key: 'weight',
        }, {
            title: '肺活量',
            dataIndex: 'feihuoliang',
            key: 'feihuoliang',
        },{
            title: '视力',
            dataIndex: 'sight',
            key: 'sight',
        },];

        const data = [{
            key: '1',
            grade: '小班',
            name: '黄丽敏',
            height: 90,
            weight: 30,
            feihuoliang: 1600,
            sight: 4.1,
        }, {
            key: '2',
            grade: '中班',
            name: '黄丽敏',
            height: 96,
            weight: 34,
            feihuoliang: 1800,
            sight: 4.1,
        }, ];
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
            <article className="pctest">
                <Nav hasLogin={this.state.hasLogin}/>
                <section>
                    <Table columns={columns} dataSource={data} pagination={false}/>
                </section>
            </article>
        )
    }
}