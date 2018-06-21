import React from 'react';

import Nav from '../../components/Nav';

import { Table, Icon, Divider } from 'antd';

import './style.less';

export default class PCTeacherChildXX extends React.Component{
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
            hasLogin: false,
            roleid : 0,
        }
    }
    handelSubmit(){
        let obj = {};
        obj.key = '15';
        obj.name = this.refs.name.value;
        obj.age = this.refs.age.value;
        obj.sex = this.refs.sex.value;
        obj.habit = this.refs.habit.value;
        obj.allergen = this.refs.allergen.value;
        // console.log(obj);
        if(this.refs.class.value === '中 1班'){
            this.state.data1.push(obj);
            // console.log(this.state.data1);
            // this.setState({data1 : this.state.data1.push(obj)},()=>{console.log(this.state.data1)});
        }else {
            this.state.data2.push(obj);
        }
        alert('添加成功！');
        this.refs.name.value = '';
        this.refs.age.value = '';
        this.refs.sex.value = '';
        this.refs.habit.value = '';
        this.refs.allergen.value = '';
        this.refs.class.value = '';
    }
    render(){
        const columns = [{
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
            <article className="pcteacherchildxx">
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
                        <span>姓名：</span><input type="text" name="name" ref="name"/>
                        <span>年龄：</span><input type="text" name="age" ref="age"/><br />
                        <span>性别：</span><input type="text" name="sex" ref="sex"/>
                        <span>爱好：</span><input type="text" name="habit" ref="habit"/><br />
                        <span>班级：</span><input type="text" name="class" ref="class"/>
                        <span>过敏史：</span><textarea cols="24" rows="7" ref="allergen"></textarea>
                        <input type="button" value="提交" onClick={this.handelSubmit.bind(this)}/>
                    </div>
                </section>
            </article>
        )
    }
}