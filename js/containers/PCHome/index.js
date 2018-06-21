import React from 'react';
import { Link } from 'react-router-dom';

import './style.less';

import Nav from '../../components/Nav';

export default class PCHome extends React.Component{
    render(){
        return (
            <section className="main">
                <header>
                    <div id="logo">
                        <i className="icon-accessibility"></i>
                        <p>幼教交互平台</p>
                    </div>
                    <Nav />
                </header>
                <article className="one">
                    <div className="top">
                        <img src="../../../img/duohai2.jpeg" />
                        <div className="omiddle">
                            <p className="fword">With talent, you do what you like.</p>
                            <p className="sword">透明高效管理<br />让您时刻陪伴孩子成长</p>
                            <Link to="/login/true"><input type="button" value="开始体验" /></Link>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="desc desone">
                            <i className="icon-map"></i>
                            <p>一个管理后台<br />两个应用客户端</p>
                        </div>
                        <div className="desc destwo">
                            <i className="icon-yelp"></i>
                            <p>一个平台<br />PC端移动端两种展示</p>
                        </div>
                        <div className="desc desthree">
                            <i className="icon-stats-dots"></i>
                            <p>便捷沟通家长<br />移动办公</p>
                        </div>
                        <div className="desc desfour">
                            <i className="icon-quill"></i>
                            <p>时刻关注孩子成长<br />不留遗憾</p>
                        </div>
                    </div>
                    {/*<div className="bottom">*/}
                        {/*<div>*/}
                            {/*<img src="../../../image/new_world.png" />*/}
                            {/*<p>关于新世界，你不知道的还有什么？</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </article>
            </section>
        )
    }
}