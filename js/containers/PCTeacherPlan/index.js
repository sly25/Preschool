import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

export default class PCTeacherPlan extends React.Component{
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
                    <Nav hasLogin={this.state.hasLogin}/>
                    <p class="hasntLoginp">{content}</p>
                </article>
                :
            <article className="pcteacherplan">
                <Nav hasLogin={this.state.hasLogin}/>
                <section className="weekaims">
                    <div className="banyuan">周目标</div>
                    <hr />
                    <div className="plandiv d1">
                        <p>数学学习</p>
                        <p>背诵九九乘法表</p>
                        <p>熟练掌握九九乘法表</p>
                    </div>
                    <div className="plandiv d2">
                        <p>语文学习</p>
                        <p>背诵三首古诗</p>
                    </div>
                    <div className="plandiv d3">
                        <p>英语学习</p>
                        <p>学习二十六字母歌</p>
                    </div>
                    <div className="plandiv d4">
                        <p>手工学习</p>
                        <p>观察小青蛙</p>
                        <p>叠纸小青蛙</p>
                    </div>
                </section>
                <section className="weekplan">
                    <p>周计划</p>
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
                    <div class="six">
                        <div class="title">日历</div>
                        <hr />
                        <table cellSpacing="0" cellPadding="0">
                            <tbody>
                            <tr>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th>六</th>
                                <th>日</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="fes"><p>1<br /><span>愚人节</span></p></td>
                                <td><p>2<br /><span>廿五</span></p></td>
                                <td><p>3<br /><span>廿六</span></p></td>
                            </tr>
                            <tr>
                                <td><p>4<br /><span>廿七</span></p></td>
                                <td class="fes"><p>5<br /><span>清明</span></p></td>
                                <td><p>6<br /><span>廿九</span></p></td>
                                <td><p>7<br /><span>三月</span></p></td>
                                <td><p>8<br /><span>初二</span></p></td>
                                <td><p>9<br /><span>初三</span></p></td>
                                <td><p>10<br /><span>初四</span></p></td>
                            </tr>
                            <tr>
                                <td class="spe"><p>11<br /><span>初五</span></p></td>
                                <td class="spe"><p>12<br /><span>初六</span></p></td>
                                <td class="spe"><p>13<br /><span>初七</span></p></td>
                                <td class="spe"><p>14<br /><span>初八</span></p></td>
                                <td class="spe"><p>15<br /><span>初九</span></p></td>
                                <td><p>16<br /><span>初十</span></p></td>
                                <td><p>17<br /><span>十一</span></p></td>
                            </tr>
                            <tr>
                                <td><p>18<br /><span>十二</span></p></td>
                                <td><p>19<br /><span>十三</span></p></td>
                                <td><p>20<br /><span>十四</span></p></td>
                                <td><p>21<br /><span>十五</span></p></td>
                                <td><p>22<br /><span>十六</span></p></td>
                                <td><p>23<br /><span>十七</span></p></td>
                                <td><p>24<br /><span>十八</span></p></td>
                            </tr>
                            <tr>
                                <td><p>25<br /><span>十九</span></p></td>
                                <td><p>26<br /><span>廿十</span></p></td>
                                <td><p>27<br /><span>廿一</span></p></td>
                                <td><p>28<br /><span>廿二</span></p></td>
                                <td><p>29<br /><span>廿三</span></p></td>
                                <td><p>30<br /><span>廿四</span></p></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
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