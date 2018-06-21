import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { Table, Icon, Divider } from 'antd';

export default class PCTeacherParentXX extends React.Component{
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
    constructor(){
        super();
        this.state = {
            data1 : [{
                key: '1',
                childName: '黄丽敏',
                parentName: '黄占',
                phone: '15889323881',
                relation: '父亲',
                email: '839274623@hotmail.com',
            },{
                key: '2',
                childName: '王娟',
                parentName: '陈霞',
                phone: '17863387678',
                relation: '母亲',
                email: '83njdhs@gmail.com',
            },{
                key: '3',
                childName: '张方郡',
                parentName: '张群',
                phone: '1883441901',
                relation: '父亲',
                email: '839274623@qq.com',
            },{
                key: '4',
                childName: '江山',
                parentName: '江凌红',
                phone: '13698965347',
                relation: '父亲',
                email: '77834uss@hotmail.com',
            },{
                key: '5',
                childName: '朱珠',
                parentName: '吴庆书',
                phone: '15889323881',
                relation: '母亲',
                email: '839274623@hotmail.com',
            },{
                key: '6',
                childName: '朱敏',
                parentName: '吴庆书',
                phone: '15889323881',
                relation: '母亲',
                email: '839274623@hotmail.com',
            },{
                key: '7',
                childName: '邹雅珍',
                parentName: '邹世明',
                phone: '18973661927',
                relation: '父亲',
                email: '839274623@qq.com',
            },{
                key: '8',
                childName: '张亚明',
                parentName: '张晓',
                phone: '16788292334',
                relation: '叔叔',
                email: '839274623@hotmail.com',
            },{
                key: '9',
                childName: '胡丽亚',
                parentName: '宋慧',
                phone: '15889323881',
                relation: '母亲',
                email: 'sh1970@hotmail.com',
            },{
                key: '10',
                childName: '陈思远',
                parentName: '陈兴平',
                phone: '1345787645',
                relation: '父亲',
                email: '839274623@hotmail.com',
            },{
                key: '11',
                childName: '佟方',
                parentName: '黄思雅',
                phone: '15889323881',
                relation: '母亲',
                email: '66728190xx@qq.com',
            },{
                key: '12',
                childName: '李媛媛',
                parentName: '李志鹏',
                phone: '84216789',
                relation: '父亲',
                email: 'lzp9901@hotmail.com',
            },{
                key: '13',
                childName: '桃李',
                parentName: '黄占',
                phone: '16777892910',
                relation: '母亲',
                email: '839274623@gmail.com',
            },{
                key: '14',
                childName: '陈蓝',
                parentName: '黄占',
                phone: '15889323881',
                relation: '母亲',
                email: '839274623@163.com',
            },],
            data2 : [{
                key: '1',
                childName: '黄丽敏',
                parentName: '黄占',
                phone: '15889323881',
                relation: '父亲',
                email: '839274623@hotmail.com',
            },{
                key: '2',
                childName: '王娟',
                parentName: '陈霞',
                phone: '17863387678',
                relation: '母亲',
                email: '83njdhs@gmail.com',
            },{
                key: '3',
                childName: '张方郡',
                parentName: '张群',
                phone: '1883441901',
                relation: '父亲',
                email: '839274623@qq.com',
            },{
                key: '4',
                childName: '江山',
                parentName: '江凌红',
                phone: '13698965347',
                relation: '父亲',
                email: '77834uss@hotmail.com',
            },{
                key: '5',
                childName: '朱珠',
                parentName: '吴庆书',
                phone: '15889323881',
                relation: '母亲',
                email: '839274623@hotmail.com',
            },{
                key: '6',
                childName: '朱敏',
                parentName: '吴庆书',
                phone: '15889323881',
                relation: '母亲',
                email: '839274623@hotmail.com',
            },{
                key: '7',
                childName: '邹雅珍',
                parentName: '邹世明',
                phone: '18973661927',
                relation: '父亲',
                email: '839274623@qq.com',
            },{
                key: '8',
                childName: '张亚明',
                parentName: '张晓',
                phone: '16788292334',
                relation: '叔叔',
                email: '839274623@hotmail.com',
            },{
                key: '9',
                childName: '胡丽亚',
                parentName: '宋慧',
                phone: '15889323881',
                relation: '母亲',
                email: 'sh1970@hotmail.com',
            },{
                key: '10',
                childName: '陈思远',
                parentName: '陈兴平',
                phone: '1345787645',
                relation: '父亲',
                email: '839274623@hotmail.com',
            },{
                key: '11',
                childName: '佟方',
                parentName: '黄思雅',
                phone: '15889323881',
                relation: '母亲',
                email: '66728190xx@qq.com',
            },{
                key: '12',
                childName: '李媛媛',
                parentName: '李志鹏',
                phone: '84216789',
                relation: '父亲',
                email: 'lzp9901@hotmail.com',
            },{
                key: '13',
                childName: '桃李',
                parentName: '黄占',
                phone: '16777892910',
                relation: '母亲',
                email: '839274623@gmail.com',
            },{
                key: '14',
                childName: '陈蓝',
                parentName: '黄占',
                phone: '15889323881',
                relation: '母亲',
                email: '839274623@163.com',
            },],
            hasLogin: false,
            roleid : 0,
        };
    }
    handelSubmit(){
        let obj = {};
        obj.key = '15';
        obj.childName = this.refs.cname.value;
        obj.parentName = this.refs.pname.value;
        obj.phone = this.refs.phone.value;
        obj.email = this.refs.email.value;
        obj.relation = this.refs.relation.value;
        // console.log(obj);
        if(this.refs.class.value === '中 1班'){
            this.state.data1.push(obj);
            // console.log(this.state.data1);
            // this.setState({data1 : this.state.data1.push(obj)},()=>{console.log(this.state.data1)});
        }else {
            this.state.data2.push(obj);
        }
        alert('添加成功！');
        this.refs.cname.value = '';
        this.refs.pname.value = '';
        this.refs.phone.value = '';
        this.refs.email.value = '';
        this.refs.relation.value = '';
        this.refs.class.value = '';
    }
    render(){
        const columns = [{
            title: '幼儿姓名',
            dataIndex: 'childName',
            key: 'childName',
        }, {
            title: '家长姓名',
            dataIndex: 'parentName',
            key: 'parentName',
        },{
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: '关系',
            dataIndex: 'relation',
            key: 'relation',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        }];
        let content;
        if(!this.state.hasLogin){
            content = '您没有登录！';
        } else if (this.state.roleid){
            content = '您没有权限！';
        }
        return (
            content ?
                <article className="jiaowuxinxiang">
                    <Nav hasLogin={this.state.hasLogin}/>
                    <p class="hasntLoginp">{content}</p>
                </article>
                :
            <article className="pcteacherparentxx">
                <Nav hasLogin={this.state.hasLogin}/>
                <section className="onetable">
                    <p className="banjiming">中 1班</p>
                    <Table columns={columns} dataSource={this.state.data1} />
                </section>
                <section className="twotable">
                    <p className="banjiming">大 3班</p>
                    <Table columns={columns} dataSource={this.state.data2} />
                </section>
                <section className="xinzengtable">
                    <p className="xinzengxinxi">新增信息</p>
                    <div class="four_right">
                        <span>幼儿姓名：</span><input type="text" name="cname" ref="cname"/>
                        <span>班级：</span><input type="text" name="class" ref="class"/><br />
                        <span>家长姓名：</span><input type="text" name="pname" ref="pname"/>
                        <span>联系方式：</span><input type="text" name="phone" ref="phone"/><br />
                        <span>关系：</span><input type="text" name="relation" ref="relation"/>
                        <span>邮箱：</span><input type="text" name="email" ref="email"/>
                        {/*<span>过敏史：</span><textarea cols="24" rows="7" ref="allergen"></textarea>*/}
                        <input type="button" value="提交" onClick={this.handelSubmit.bind(this)}/>
                    </div>
                </section>
            </article>
        )
    }
}