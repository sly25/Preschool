import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

import { Table, Icon, Divider } from 'antd';

export default class MobileTeacherXX extends React.Component{
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
            data1: [{
                key: '1',
                name: '黄丽敏',
                age: 5,
                sex: '女',
                habit: '跳舞',
                allergen: '无'
            },{
                key: '2',
                name: '王娟',
                age: 5,
                sex: '女',
                habit: '画画',
                allergen: '无'
            },{
                key: '3',
                name: '张方郡',
                age: 5,
                sex: '男',
                habit: '玩玩具车',
                allergen: '海鲜'
            },{
                key: '4',
                name: '江山',
                age: 6,
                sex: '男',
                habit: '看书',
                allergen: '无'
            },{
                key: '5',
                name: '朱珠',
                age: 5,
                sex: '女',
                habit: '看动画片',
                allergen: '花粉'
            },{
                key: '6',
                name: '朱敏',
                age: 5,
                sex: '女',
                habit: '跳舞',
                allergen: '无'
            },{
                key: '7',
                name: '邹雅珍',
                age: 5,
                sex: '女',
                habit: '睡觉',
                allergen: '无'
            },{
                key: '8',
                name: '张亚明',
                age: 4,
                sex: '男',
                habit: '看书',
                allergen: '无'
            },{
                key: '9',
                name: '胡丽亚',
                age: 5,
                sex: '女',
                habit: '滑板车',
                allergen: '芒果'
            },{
                key: '10',
                name: '陈思远',
                age: 5,
                sex: '男',
                habit: '奥数',
                allergen: '阿莫西林'
            },{
                key: '11',
                name: '佟方',
                age: 5,
                sex: '女',
                habit: '跳舞',
                allergen: '无'
            },{
                key: '12',
                name: '李媛媛',
                age: 5,
                sex: '女',
                habit: '芭比娃娃',
                allergen: '无'
            },{
                key: '13',
                name: '桃李',
                age: 4,
                sex: '女',
                habit: '弹钢琴',
                allergen: '花生'
            },{
                key: '14',
                name: '陈蓝',
                age: 5,
                sex: '男',
                habit: '足球',
                allergen: '无'
            },],
            data2: [{
                key: '1',
                name: '黄丽敏',
                age: 5,
                sex: '女',
                habit: '跳舞',
                allergen: '无'
            },{
                key: '2',
                name: '王娟',
                age: 5,
                sex: '女',
                habit: '画画',
                allergen: '无'
            },{
                key: '3',
                name: '张方郡',
                age: 5,
                sex: '男',
                habit: '玩玩具车',
                allergen: '海鲜'
            },{
                key: '4',
                name: '江山',
                age: 6,
                sex: '男',
                habit: '看书',
                allergen: '无'
            },{
                key: '5',
                name: '朱珠',
                age: 5,
                sex: '女',
                habit: '看动画片',
                allergen: '花粉'
            },{
                key: '6',
                name: '朱敏',
                age: 5,
                sex: '女',
                habit: '跳舞',
                allergen: '无'
            },{
                key: '7',
                name: '邹雅珍',
                age: 5,
                sex: '女',
                habit: '睡觉',
                allergen: '无'
            },{
                key: '8',
                name: '张亚明',
                age: 4,
                sex: '男',
                habit: '看书',
                allergen: '无'
            },{
                key: '9',
                name: '胡丽亚',
                age: 5,
                sex: '女',
                habit: '滑板车',
                allergen: '芒果'
            },{
                key: '10',
                name: '陈思远',
                age: 5,
                sex: '男',
                habit: '奥数',
                allergen: '阿莫西林'
            },{
                key: '11',
                name: '佟方',
                age: 5,
                sex: '女',
                habit: '跳舞',
                allergen: '无'
            },{
                key: '12',
                name: '李媛媛',
                age: 5,
                sex: '女',
                habit: '芭比娃娃',
                allergen: '无'
            },{
                key: '13',
                name: '桃李',
                age: 4,
                sex: '女',
                habit: '弹钢琴',
                allergen: '花生'
            },{
                key: '14',
                name: '陈蓝',
                age: 5,
                sex: '男',
                habit: '足球',
                allergen: '无'
            },],
            data3 : [{
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
            data4 : [{
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
        }
    }
    render(){
        const columns1 = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        }, {
            title: '爱好',
            dataIndex: 'habit',
            key: 'habit',
        },{
            title: '过敏原',
            dataIndex: 'allergen',
            key: 'allergen',
        }];
        const columns2 = [{
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
                    <Link to="/">
                        <div className="backtohome"></div>
                    </Link>
                    <p class="hasntLoginp">{content}</p>
                </article>
                :
                <article className="pcteacherchildxx mobileteacherxx">
                    <section className="onetable">
                        <Link to="/">
                            <div className="backtohome"></div>
                        </Link>
                        <h2 className="title">幼儿信息</h2>
                        <p className="banjiming">中 1班</p>
                        <Table columns={columns1} dataSource={this.state.data1} />
                    </section>
                    <section className="twotable">
                        <p className="banjiming">大 3班</p>
                        <Table columns={columns1} dataSource={this.state.data2} />
                    </section>
                    <section className="onetable threetable">
                        <h2 className="title">家长信息</h2>
                        <p className="banjiming">中 1班</p>
                        <Table columns={columns2} dataSource={this.state.data3} />
                    </section>
                    <section className="twotable fourtable">
                        <p className="banjiming">大 3班</p>
                        <Table columns={columns2} dataSource={this.state.data4} />
                    </section>
                </article>
        )
    }
}