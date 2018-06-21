import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { Table } from 'antd';

export default class PCPaymentXFCX extends React.Component{
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
            title: '年级',
            dataIndex: 'grade',
            key: 'grade',
        }, {
            title: '学费',
            dataIndex: 'xuefei',
            key: 'xuefei',
        }, {
            title: '教材费',
            dataIndex: 'jiaocaifei',
            key: 'jiaocaifei',
        }, {
            title: '午餐费',
            dataIndex: 'wucanfei',
            key: 'wucanfei',
        },{
            title: '材料费',
            dataIndex: 'cailiaofei',
            key: 'cailiaofei',
        },];

        const data = [{
            key: '1',
            grade: '小班',
            xuefei: 8000,
            jiaocaifei: 500,
            wucanfei: 8000,
            cailiaofei: 400,
        }, {
            key: '2',
            grade: '中班',
            xuefei: 10000,
            jiaocaifei: 500,
            wucanfei: 8000,
            cailiaofei: 800,
        }, {
            key: '3',
            grade: '大班',
            xuefei: 10000,
            jiaocaifei: 600,
            wucanfei: 8000,
            cailiaofei: 800,
        }];
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
            <article className="pcpaymentxfcx">
                <Nav hasLogin={this.state.hasLogin}/>
                <section>
                    <Table columns={columns} dataSource={data} pagination={false}/>
                </section>
            </article>
        )
    }
}