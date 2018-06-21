import React from 'react';

import './style.less';

import { Table } from 'antd';

import Nav from '../../components/Nav';

export default class PCPaymentSJCX extends React.Component{
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
            title: '年度',
            dataIndex: 'year',
            key: 'year',
        }, {
            title: '应缴金额',
            dataIndex: 'shouldPay',
            key: 'shouldPay',
        }, {
            title: '已缴金额',
            dataIndex: 'hadPay',
            key: 'hadPay',
        }, {
            title: '银行卡号',
            dataIndex: 'account',
            key: 'account',
        },{
            title: '缴费时间',
            dataIndex: 'time',
            key: 'time',
        },];

        const data = [{
            key: '1',
            year: '2017',
            shouldPay: 16900,
            hadPay: 16900,
            account: '5421932749837984',
            time: '2017-3-22',
        }, {
            key: '2',
            year: '2018',
            shouldPay: 17500,
            hadPay: 17500,
            account: '5421932749837984',
            time: '2017-4-10',
        },];
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
            <article className="pcpaymentsjcx">
                <Nav hasLogin={this.state.hasLogin}/>
                <section>
                    <Table columns={columns} dataSource={data} pagination={false}/>
                </section>
            </article>
        )
    }
}