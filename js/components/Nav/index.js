import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './style.less';

export default class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
          hasLogin : false,
        };
    }
    componentDidMount(){
        // console.log(document.cookie.indexOf('username'))
        // console.log(document.cookie);
        if(this.props.hasLogin){
            this.setState({hasLogin : true});
        } else {
            this.setState({hasLogin : false});
        }
        if(document.cookie.indexOf('username') !== -1){
            this.setState({
                hasLogin : true,
            })
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            hasLogin: nextProps.hasLogin,
        });
    }
    render() {
        let style = {
            'background':'transparent',
            'borderColor':'#000020',
            // 'position':'absolute',
            // 'right':'0',
            // 'top':'0'
        };
        return (
                <div className="nav">
                    {this.state.hasLogin ?
                    <Menu mode="horizontal" style={style}>
                        <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
                        <SubMenu key="parent" title={<span>家长服务</span>}>
                            <Menu.Item key="parentMonitor"><Link to="/parent/monitor">查看监控</Link></Menu.Item>
                            <Menu.Item key="parentCheckon"><Link to="/parent/checkon">考勤请假</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="teacher" title={<span>教师服务</span>}>
                            <Menu.Item key="teacherChildXX"><Link to="/teacher/childxx">幼儿信息</Link></Menu.Item>
                            <Menu.Item key="teacherParentXX"><Link to="/teacher/parentxx">家长信息</Link></Menu.Item>
                            <Menu.Item key="teacherCheckOn"><Link to="/teacher/checkon">学生考勤</Link></Menu.Item>
                            <Menu.Item key="teacherPlan"><Link to="/teacher/plan">周计划</Link></Menu.Item>
                        </SubMenu>
                        {/*<Menu.Item key="teacher"><Link to="/teacher">教师服务</Link></Menu.Item>*/}
                        <SubMenu key="teach_manage" title={<span>教学管理</span>}>
                            <Menu.Item key="teachActive"><Link to="/teach_manage/active">近期活动</Link></Menu.Item>
                            <Menu.Item key="teachNotice"><Link to="/teach_manage/notice">近期通知</Link></Menu.Item>
                        </SubMenu>
                        {/*<Menu.Item key="teach_manage"><Link to="/teach_manage">教学管理</Link></Menu.Item>*/}
                        {/*<SubMenu key="payment" title={<span><Link to="/payment">财务缴费</Link></span>}>*/}
                            {/*<Menu.Item key="paymentSJCX"><Link to="/payment/sjcx">缴费收据查询</Link></Menu.Item>*/}
                            {/*<Menu.Item key="paymentXFCX"><Link to="/payment/xfcx">学费查询</Link></Menu.Item>*/}
                            {/*<Menu.Item key="paymentJF"><Link to="/payment/jf">学生缴费</Link></Menu.Item>*/}
                        {/*</SubMenu>*/}
                        <Menu.Item key="payment"><Link to="/payment">财务缴费</Link></Menu.Item>
                        <SubMenu key="ducument" title={<span>文档管理</span>}>
                            <Menu.Item key="information"><Link to="/document/information">校方信息</Link></Menu.Item>
                            <Menu.Item key="acheivement"><Link to="/document/achievement">期末成绩</Link></Menu.Item>
                        </SubMenu>
                        {/*<Menu.Item key="document"><Link to="/document">文档管理</Link></Menu.Item>*/}
                        <Menu.Item key="material"><Link to="/material">后勤物资</Link></Menu.Item>
                        <Menu.Item key="test"><Link to="/test">体检</Link></Menu.Item>
                        <Menu.Item key="email"><Link to="/email">教务信箱</Link></Menu.Item>
                        <Menu.Item key="login"><Link to="/login">
                            <i className="icon-user"></i>
                            登录
                        </Link></Menu.Item>
                    </Menu>
                    :
                    <Menu mode="horizontal" style={style}>
                        <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
                        <Menu.Item key="login"><Link to="/login">
                            <i className="icon-user"></i>
                            登录
                        </Link></Menu.Item>
                    </Menu>}
                </div>
        )
    }
}