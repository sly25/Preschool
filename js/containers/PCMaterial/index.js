import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class PCMaterial extends React.Component{
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        this.state = {
            activeKey: '1',
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
    onChange(activeKey) {
        this.setState({ activeKey });
    }
    render(){
        return (
            this.state.hasLogin ?
            <article className="pcmaterial">
                <Nav hasLogin={this.state.hasLogin}/>
                <section className="four">
                    <div className="title">每周食谱</div>
                    <Tabs
                        onChange={this.onChange.bind(this)}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        hideAdd={true}
                    >
                        <TabPane tab="星期一" key="1" closable={false}>
                            <img src="/img/sw2.jpg" className="sw"/>
                            <p className="caiming">糖醋小排</p>
                            <p className="caiming">香菇滑鸡</p>
                            <p className="caiming caiming3">三鲜鲫鱼汤</p>
                        </TabPane>
                        <TabPane tab="星期二" key="2" closable={false}>
                            <img src="/img/sw4.jpeg" className="sw"/>
                            <p className="caiming">粉蒸肉</p>
                            <p className="caiming">四喜丸子</p>
                            <p className="caiming caiming3">番茄炒蛋</p>
                        </TabPane>
                        <TabPane tab="星期三" key="3" closable={false}>
                            <img src="/img/sww5.jpeg" className="sw"/>
                            <p className="caiming">油焖虾</p>
                            <p className="caiming">咖喱牛肉</p>
                            <p className="caiming caiming3">酸菜鱼</p>
                        </TabPane>
                        <TabPane tab="星期四" key="4" closable={false}>
                            <img src="/img/sw1.jpg" className="sw"/>
                            <p className="caiming">孜然羊肉</p>
                            <p className="caiming">南瓜粥</p>
                            <p className="caiming caiming3">玉米羹</p>
                        </TabPane>
                        <TabPane tab="星期五" key="5" closable={false}>
                            <img src="/img/sw3.jpeg" className="sw"/>
                            <p className="caiming">白切鸡</p>
                            <p className="caiming">红烧猪蹄</p>
                            <p className="caiming caiming3">东坡肉</p>
                        </TabPane>
                    </Tabs>
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