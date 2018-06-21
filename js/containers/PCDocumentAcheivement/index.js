import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { Table } from 'antd';

export default class PCDocumentAcheivement extends React.Component{
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
            title: '语文',
            dataIndex: 'chinese',
            key: 'chinese',
        }, {
            title: '数学',
            dataIndex: 'math',
            key: 'math',
        }, {
            title: '英语',
            dataIndex: 'english',
            key: 'english',
        },{
            title: '手工',
            dataIndex: 'hand',
            key: 'hand',
        },];

        const data = [{
            key: '1',
            grade: '小班 上',
            name: '黄丽敏',
            chinese: 90,
            math: 85,
            english: 92,
            hand: 95,
        }, {
            key: '2',
            grade: '小班 下',
            name: '黄丽敏',
            chinese: 93,
            math: 94,
            english: 84,
            hand: 90,
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
            <article className="pcdocumentacheivement">
                <Nav hasLogin={this.state.hasLogin}/>
                {this.state.hasLogin ?
                    <section>
                        <Table columns={columns} dataSource={data} pagination={false}/>
                    </section>
                    :
                    <section>
                        <p class="hasntLoginp">您还没有登录！</p>
                    </section>
                }
            </article>
        )
    }
}