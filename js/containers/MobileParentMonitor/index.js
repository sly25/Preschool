import React from 'react';

import { Link } from 'react-router-dom';

import { DatePicker } from 'antd';

import './style.less';

export default class MobileParentMonitor extends React.Component{
    constructor() {
        super();
        this.state = {
            // showFirstSection: true,
            // showSecondSection: false,
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
    // handleOneClick() {
    //     this.setState({
    //         showFirstSection: true,
    //         showSecondSection: false,
    //     })
    // }
    // handleTwoClick() {
    //     this.setState({
    //         showFirstSection: false,
    //         showSecondSection: true,
    //     })
    // }
    // onChange(value, dateString) {
    //     console.log('Selected Time: ', value);
    //     console.log('Formatted Selected Time: ', dateString);
    // }
    // onOk(value) {
    //     console.log('onOk: ', value);
    // }
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
                    <Link to="/">
                        <div className="backtohome"></div>
                    </Link>
                    <p class="hasntLoginp">{content}</p>
                </article>
                :
                <section className="PCMonitorContainer mobileMonitorContainer">
                        <Link to="/">
                            <div className="backtohome"></div>
                        </Link>
                        <p className="monitortitle">实时监控</p>
                        <div className="videocontainer">
                            <video src="/video/shishi1.mp4" controls="controls" autoPlay>
                                <source src="/video/shishi1.mp4" type="video/mp4"/>
                            </video>
                        </div>
                </section>
        )
    }
}