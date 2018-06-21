import React from 'react';

import './style.less';
import Nav from "../../components/Nav/index";

import { Tree,Button } from 'antd';
const TreeNode = Tree.TreeNode;

export default class PCTeacherCheckOn extends React.Component{
    constructor(){
        super();
        this.state = {
            expandedKeys: ['2-1', '3-3'],
            autoExpandParent: true,
            checkedKeys: [],
            selectedKeys: [],
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
    onExpand(expandedKeys) {
        // console.log('onExpand', arguments);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    }
    onCheck(checkedKeys) {
        // console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    }
    onSelect(selectedKeys, info) {
        // console.log('onSelect', info);
        this.setState({ selectedKeys });
    }
    renderTreeNodes(data) {
        return data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
    }
    handleClick(){
        alert('提交成功！');
        console.log(this.state.checkedKeys);
    }
    render(){
        const treeData = [{
            title: '中 1班',
            key: '2-1',
            children: [
                { title: '黄丽敏', key: '黄丽敏' },
                { title: '王娟', key: '王娟' },
                { title: '张方郡', key: '张郡' },
                { title: '江山', key: '江山' },
                { title: '朱珠', key: '朱珠' },
                { title: '朱敏', key: '朱敏' },
                { title: '邹雅珍', key: '邹雅珍' },
                { title: '张亚明', key: '张亚明' },
                { title: '胡丽亚', key: '胡丽亚' },
                { title: '陈思远', key: '陈思远' },
                { title: '佟方', key: '佟方' },
                { title: '李媛媛', key: '李媛媛' },
                { title: '桃李', key: '桃李' },
                { title: '陈蓝', key: '陈蓝' },
            ],
        },
            {
                title: '大 3班',
                key: '3-3',
                children: [
                    { title: '黄丽敏', key: '黄丽敏 ' },
                    { title: '王娟', key: '王娟 ' },
                    { title: '张方郡', key: '张方郡 ' },
                    { title: '江山', key: '江山 ' },
                    { title: '朱珠', key: '朱珠 ' },
                    { title: '朱敏', key: '朱敏 ' },
                    { title: '邹雅珍', key: '邹雅珍 ' },
                    { title: '张亚明', key: '张亚明 ' },
                    { title: '胡丽亚', key: '胡丽亚 ' },
                    { title: '陈思远', key: '陈思远 ' },
                    { title: '佟方', key: '佟方 ' },
                    { title: '李媛媛', key: '李媛媛 ' },
                    { title: '桃李', key: '桃李 ' },
                    { title: '陈蓝', key: '陈蓝 ' },
                ],
            }];
        const treeData1 = [{
            title: '中 1班',
            key: '2-1',
            children: [
                { title: '黄丽敏', key: '黄丽敏  ' },
                { title: '王娟', key: '王娟  ' },
                { title: '张方郡', key: '张郡  ' },
                { title: '江山', key: '江山  ' },
                { title: '朱珠', key: '朱珠  ' },
                { title: '朱敏', key: '朱敏  ' },
                { title: '邹雅珍', key: '邹雅珍  ' },
                { title: '张亚明', key: '张亚明  ' },
                { title: '胡丽亚', key: '胡丽亚  ' },
                { title: '陈思远', key: '陈思远  ' },
                { title: '佟方', key: '佟方  ' },
                { title: '李媛媛', key: '李媛媛  ' },
                { title: '桃李', key: '桃李  ' },
                { title: '陈蓝', key: '陈蓝  ' },
            ],
        },
            {
                title: '大 3班',
                key: '3-3',
                children: [
                    { title: '黄丽敏', key: ' 黄丽敏' },
                    { title: '王娟', key: ' 王娟' },
                    { title: '张方郡', key: ' 张方郡' },
                    { title: '江山', key: ' 江山' },
                    { title: '朱珠', key: ' 朱珠' },
                    { title: '朱敏', key: ' 朱敏' },
                    { title: '邹雅珍', key: ' 邹雅珍' },
                    { title: '张亚明', key: ' 张亚明' },
                    { title: '胡丽亚', key: ' 胡丽亚' },
                    { title: '陈思远', key: ' 陈思远' },
                    { title: '佟方', key: ' 佟方' },
                    { title: '李媛媛', key: ' 李媛媛' },
                    { title: '桃李', key: ' 桃李' },
                    { title: '陈蓝', key: ' 陈蓝' },
                ],
            }];
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
            <article className="teachercheckon">
                {/*<Nav hasLogin={true}/>*/}
                <header>
                    <p><strong>每</strong>日考勤</p>
                </header>
                <section className="line">
                    <hr />
                    <div className="imgcontainer">
                        <img src="/img/yuant1.jpeg"/>
                        <div className="zhezhaoceng">上午</div>
                    </div>
                    <hr />
                    <div className="imgcontainer img2">
                        <img src="/img/yuant.jpeg"/>
                        <div className="zhezhaoceng">下午</div>
                    </div>
                    <hr />
                </section>
                <section className="dagougou">
                    <Tree
                        checkable
                        onExpand={this.onExpand.bind(this)}
                        expandedKeys={this.state.expandedKeys}
                        autoExpandParent={this.state.autoExpandParent}
                        onCheck={this.onCheck.bind(this)}
                        checkedKeys={this.state.checkedKeys}
                        onSelect={this.onSelect.bind(this)}
                        selectedKeys={this.state.selectedKeys}
                    >
                        {this.renderTreeNodes(treeData)}
                    </Tree>
                    <Button type="dashed" onClick={this.handleClick.bind(this)}>确认</Button>
                    <Tree
                        checkable
                        onExpand={this.onExpand.bind(this)}
                        expandedKeys={this.state.expandedKeys}
                        autoExpandParent={this.state.autoExpandParent}
                        onCheck={this.onCheck.bind(this)}
                        checkedKeys={this.state.checkedKeys}
                        onSelect={this.onSelect.bind(this)}
                        selectedKeys={this.state.selectedKeys}
                    >
                        {this.renderTreeNodes(treeData1)}
                    </Tree>
                    <Button type="dashed" onClick={this.handleClick.bind(this)}>确认</Button>
                </section>
                <p className="fuzelaoshi">负责老师：胡兰<br />日期：2018.5.12</p>
            </article>
        )
    }
}