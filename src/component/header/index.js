import React, { Component } from 'react'
import { Link } from 'react-router'

import { Layout, Menu } from 'antd'
import './index.less'

const { Header } = Layout

export default class Head extends Component {
    constructor() {
        super()
        this.state = {
            current: 'mail'
        }
    }
    render() {
        return (
            <Header className="header" style={{ height: '50px' }}>
                <Menu
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    theme="dark"
                >
                    <Menu.Item key="mail"><Link to="/">首页</Link></Menu.Item>
                    <Menu.Item key="app"><Link to="/news">新闻</Link></Menu.Item>
                    <Menu.Item key="alipay"><Link to="/about">关于</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}
