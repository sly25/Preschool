import React from 'react';

import './style.less';

export default class PCDocument extends React.Component{
    initMap(){
        this.createMap();//创建地图
        this.setMapEvent();//设置地图事件
        this.addMapControl();//向地图添加控件
    }
    createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.395391,39.775511);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }
    componentDidMount(){
        this.initMap();
    }
    render(){
        return (
            <article className="PCDocument">
                <section className="pcdocument">
                    <p className="slogen">创造快乐</p>
                    <p className="youeryuanname">蓝天幼儿园</p>
                    <hr />
                    <p className="jianjie">空军装备研究院蓝天幼儿园，北京市一级一类园，始建于1956年，坐落于北京市海淀安宁路11号院内，是一所全日制的幼儿园。园内占地面积5800平方米，环境优美，现代化设备齐备，设有音乐室、感统游戏室、亲子室、图书资料室、营养厨房室等。</p>
                    <img className="yey" src="/img/youeryuan.jpg" />
                </section>
                <section className="white">
                    <div className="teacher">
                        <p className="ourteachers">OUR TEACHERS</p>
                        <div className="oneteacher">
                            <p>冯泽老师<br />五年幼教经验</p>
                            <img src="/img/teacher1.png" className="teacherimg"/>
                        </div>
                        <div className="oneteacher">
                            <img src="/img/teacher3.jpeg" className="teacherimg"/>
                            <p className="teacherbp">张婷老师<br />优秀班主任</p>
                        </div>
                        <div className="oneteacher">
                            <img src="/img/teacher7.jpeg" className="teacherimg"/>
                            <p className="teacherbp">胡晓雨老师<br />最喜爱的老师</p>
                        </div>
                        <div className="oneteacher">
                            <p>黄颖老师<br />优秀舞蹈老师</p>
                            <img src="/img/teacher8.jpeg" className="teacherimg"/>
                        </div>
                        <div className="oneteacher">
                            <p>王鹤老师<br />优秀英语老师</p>
                            <img src="/img/teacher5.jpeg" className="teacherimg"/>
                        </div>
                        <div className="oneteacher">
                            <img src="/img/teacher6.jpeg" className="teacherimg"/>
                            <p className="teacherbp">陈丽丽老师<br />留学老师</p>
                        </div>
                        <div className="oneteacher">
                            <img src="/img/teacher2.jpeg" className="teacherimg"/>
                            <p className="teacherbp">李媛媛老师<br />带队获奖老师</p>
                        </div>
                        <div className="oneteacher">
                            <img src="/img/teacher4.jpeg" className="teacherimg"/>
                            <p className="teacherbp">张丽婷园长<br />最受欢迎的园长</p>
                        </div>
                    </div>
                    <div className="address">
                        <div id="dituContent"></div>
                        <p>学校地址</p>
                    </div>
                </section>
            </article>
        )
    }
}