import React from 'react';

import './style.less';

import { Link } from 'react-router-dom';

export default class MobileTeachNoticeContent extends React.Component{
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
            <article className="jutitongzhi mobilecontent">
                <Link to="/notice">
                    <div className="backtohome"></div>
                </Link>
                <h2>关于核查2018-2019学年教学计划兼任务的通知</h2>
                <hr />
                <p>现将重庆邮电大学2018-2019学年（20181、20182）教学计划（兼任务）发予，请根据各年级各专业培养方案仔细核对。

                    注意事项：

                    1.核对内容：课程名称、课程类别、理论学时、实验学时、学分、开设学期、承担课程教学部是否有误；

                    2.实践环节安排在课余和假期的请特别注明；

                    3.二专业教学计划请开设学院单独报送；

                    4.核对完成经教学院长签字盖章后的纸质文档请各学院最晚于第8周周一（4月23日）17：00前返回教学运行科。
                </p>



                    <p>教学运行科<br />

                    2018年4月16日</p>
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