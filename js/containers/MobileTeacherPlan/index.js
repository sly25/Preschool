import React from 'react';

import { Link } from 'react-router-dom';

import './style.less';

export default class MobileTeacherPlan extends React.Component{
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
                <article className="pcteacherplan mobileteacherplan">
                    <Link to="/">
                        <div className="backtohome"></div>
                    </Link>
                    <section className="weekaims">
                        <div className="banyuan">周计划</div>
                        <hr />
                    </section>
                    <section className="weekplan">
                        <ul>
                            <li>
                                <i className="icon-pacman"></i>
                                <p>数学</p>
                                <p>周一，周二教学，周三要求背诵，周四周五检查</p>
                            </li>
                            <li>
                                <i className="icon-book"></i>
                                <p>语文</p>
                                <p>周一，周三，周五每天新教一首古诗，周二，周四，下周一课上背诵</p>
                            </li>
                            <li>
                                <i className="icon-music"></i>
                                <p>英语</p>
                                <p>周一熟悉字母歌，周二，周三，周四教二十六个字母，周五，下周一复习</p>
                            </li>
                            <li>
                                <i className="icon-star-full"></i>
                                <p>手工</p>
                                <p>周一布置观察小青蛙的作业，周二播放小青蛙视频，周三，周四学制作纸叠小青蛙，周五放小青蛙动画片</p>
                            </li>
                        </ul>
                    </section>
                    <section className="lastweek">
                        <div class="seven">
                            <div class="title">上周计划完成进度</div>
                            <table cellSpacing="0" class="pm">
                                <tbody>
                                <tr>
                                    <th></th>
                                    <th>科目</th>
                                    <th>完成百分比</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>数学</td>
                                    <td>
                                        <span>80%&nbsp;</span>
                                        <div><div></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>语文</td>
                                    <td>
                                        <span>79%&nbsp;</span>
                                        <div><div></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>英语</td>
                                    <td>
                                        <span>80%&nbsp;</span>
                                        <div><div></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>手工</td>
                                    <td>
                                        <span>75%&nbsp;</span>
                                        <div><div></div></div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </article>
        )
    }
}