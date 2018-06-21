import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { Select,Table } from 'antd';
const Option = Select.Option;

export default class PCPaymentJF extends React.Component{
    constructor(){
        super();
        this.state = {
            data : [],
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
    handleChange(value) {
        // console.log(`selected ${value}`);
        if (value === '2018'){
            this.setState({
                data : [{
                    year: '2018',
                    shouldPay: '17500',
                    hadPay: '0',
                    unpay: '17500',
                    pay: '去支付'
                }]
            });
        }else {
            this.setState({
                data : [{
                    year: '2017',
                    shouldPay: '16900',
                    hadPay: '16900',
                    unpay: '0',
                }]
            });
        }
    }
    render(){
        const columns = [{
            title: '学年',
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
            title: '未交金额',
            dataIndex: 'unpay',
            key: 'unpay',
        },{
            title: '',
            dataIndex: 'pay',
            key: 'pay',
            render: text => <a href="javascript:;">{text}</a>,
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
            <article className="pcpaymentjf">
                <Nav hasLogin={this.state.hasLogin}/>
                <section>
                    <span>请选择缴费学年：</span>
                    <Select style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                        <Option value="2018">2018</Option>
                        <Option value="2017">2017</Option>
                    </Select>
                    <Table columns={columns} dataSource={this.state.data} pagination={false}/>
                </section>
            </article>
        )
    }
}