import React from 'react';

import './style.less';

import { Carousel,Upload, message, Button, Icon } from 'antd';

import Nav from '../../components/Nav';

export default class PCTeachActive extends React.Component{
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
    }
    render(){
        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            this.state.hasLogin ?
            <article className="pcteachactive">
                <article class="two">
                    <div class="two_first">
                        <img src="/img/cai2.jpg" />
                        <div class="two_first_content">
                            <p>近期活动</p>
                            <hr />
                            <p>每周都有精彩活动，诚邀您参加</p>
                        </div>
                    </div>
                    <div class="two_second">
                        <div class="two_second_one tsdiv">
                            <div><img src="/img/haihuashu.jpeg" /></div>
                            <p>第二周</p>
                            <p>亲子绘画</p>
                        </div>
                        <div class="two_second_two tsdiv">
                            <p>第三周</p>
                            <p>亲子信任拓展活动</p>
                            <div><img src="/img/wanfushu.jpeg" /></div>
                        </div>
                        <div class="two_second_three tsdiv">
                            <div><img src="/img/beiyingshu.jpeg" /></div>
                            <p>第四周</p>
                            <p>创意作品展示会</p>
                        </div>
                        <div class="two_second_four tsdiv">
                            <div><img src="/img/gongzhu.png" /></div>
                            <p>第五周</p>
                            <p>化装舞会</p>
                        </div>
                    </div>
                </article>
                <article class="lunbo">
                    <div class="three_top">
                        <Carousel autoplay>
                            <div><img src="/img/lunbo.jpg" /></div>
                            <div><img src="/img/lunbo2.jpg" /></div>
                            <div><img src="/img/lunbo3.jpg" /></div>
                            <div><img src="/img/lunbo4.jpg" /></div>
                        </Carousel>
                    </div>
                    <div class="three_bottom">
                        <div class="three_bottom_one">
                            <div>
                                <p>活动照片<br />关于更多活动精彩照片</p>
                                <hr />
                                <input type="button" value="查看更多" />
                            </div>
                        </div>
                        <div class="three_bottom_two">
                            <div>
                                <p>上传照片<br />上传您拍摄的精彩活动照片</p>
                                <hr />
                                <Upload {...props}>
                                    <input type="button" value="上传照片" />
                                </Upload>
                            </div>
                        </div>
                        <div class="three_bottom_three">
                            <img src="/img/sheying.jpeg" />
                            <div></div>
                        </div>
                    </div>
                </article>
            </article>
                :
                <article className="jiaowuxinxiang">
                    <Nav hasLogin={this.state.hasLogin}/>
                    <p class="hasntLoginp">您没有登录！</p>
                </article>
        )
    }
}