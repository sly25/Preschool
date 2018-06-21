import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

export default class PCEmail extends React.Component{
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
        }
    }
    render(){
        return (
             this.state.hasLogin ?
                <article className="jiaowuxinxiang">
                    <Nav hasLogin={this.state.hasLogin}/>
                    <section className="emailimgc">
                        <p>您的反馈</p>
                        <p>促使我们更快进步</p>
                    </section>
                    <section className="emailsuggest">
                        <p className="onep">反馈建议</p>
                        <div class="footer_top">
                            <div>
                                <p>联系我们</p>
                                <p>校方电话： 84317788 <br/>也可以通过以下任何方式关注我们动态</p>
                                <img src="/img/lianxi.png" className="lianxiimg"/>
                            </div>
                        </div>
                    </section>
                    <section className="emailtousu">
                        <p className="onep">投诉</p>
                        <div className="tousuc">
                            <div className="xiaozhang">
                                <i className="icon-phone"></i>
                                <p>校长电话</p>
                                <p>84306667</p>
                                <p>xzsw1970@gmail.com</p>
                            </div>
                            <div className="xiaojing">
                                <i className="icon-office"></i>
                                <p>联系校警</p>
                                <p>84306667</p>
                                <p>84305791</p>
                            </div>
                        </div>
                    </section>
                </article>
                :
                <article className="jiaowuxinxiang">
                    <Nav hasLogin={this.state.hasLogin}/>
                    <p class="hasntLoginp">您还没有登录！</p>
                </article>
        )
    }
}