import React from 'react';

import './style.less';

import Nav from '../../components/Nav';

import { DatePicker } from 'antd';

export default class PCParentMonitor extends React.Component {
    constructor() {
        super();
        this.state = {
            showFirstSection: true,
            showSecondSection: false,
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
    handleOneClick() {
        this.setState({
            showFirstSection: true,
            showSecondSection: false,
        })
    }
    handleTwoClick() {
        this.setState({
            showFirstSection: false,
            showSecondSection: true,
        })
    }
    onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    onOk(value) {
        console.log('onOk: ', value);
    }
    render() {
        const { RangePicker } = DatePicker;
        let content;
        if(!this.state.hasLogin){
            content = '您没有登录！';
        } else if (!this.state.roleid){
            content = '您没有权限！';
        }
        return (
            content ?
                <article className="jiaowuxinxiang">
                    <Nav hasLogin={this.state.hasLogin}/>
                    <p class="hasntLoginp">{content}</p>
                </article>
                :
            <section className="PCMonitorContainer">
                <Nav hasLogin={this.state.hasLogin}/>
                <div className="sidebar">
                    <p onClick={this.handleOneClick.bind(this)}>实时</p>
                    <hr/>
                    <p onClick={this.handleTwoClick.bind(this)}>回看</p>
                    <div className="kongxin"></div>
                </div>
                {this.state.showFirstSection?
                <div className="videocontainer">
                    <video src="/video/shishi1.mp4" controls="controls" autoPlay>
                        <source src="/video/shishi1.mp4" type="video/mp4"/>
                    </video>
                </div>
                :
                <section className="huikacontainer">
                    <span className="selecttitle">选择回看时间：</span>
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        placeholder={['Start Time', 'End Time']}
                        onChange={this.onChange}
                        onOk={this.onOk}
                    />
                    <div className="videocontainer">
                        <video src="/video/huikan1.mp4" controls="controls">
                            <source src="/video/huikan1.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </section>}
            </section>
        )
    }
}