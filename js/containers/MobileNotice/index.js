import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

export default class MobileNotice extends React.Component{
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
    render(){
        return (
            this.state.hasLogin ?
                <article className="mobilenotice">
                    <section className="pxsbxc">
                        <Link to="/">
                            <div className="backtohome"></div>
                        </Link>
                            <ul><span>近期通知</span>
                                <li><Link to="/teach_manage/notice/content">开学家访通知</Link></li>
                                <li><Link to="/teach_manage/notice/content">第二周活动邀请</Link></li>
                                <li><Link to="/teach_manage/notice/content">第二周活动负责人公示</Link></li>
                                <li><Link to="/teach_manage/notice/content">第五周运动会通知</Link></li>
                                <li><Link to="/teach_manage/notice/content">五一节致家长的一封信</Link></li>
                                <li><Link to="/teach_manage/notice/content">第十一周家长会通知</Link></li>
                                <li><Link to="/teach_manage/notice/content">第十一周家长会名单确定</Link></li>
                            </ul>
                    </section>
                </article>
                :
                <article className="jiaowuxinxiang">
                    <Link to="/">
                        <div className="backtohome"></div>
                    </Link>
                    <p class="hasntLoginp">您没有登录！</p>
                </article>
        )
    }
}