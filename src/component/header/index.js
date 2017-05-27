import React, { Component } from 'react'
import { Link } from 'react-router'
import { Layout, Menu } from 'antd'
import logoSrc from './images/default.jpg'

import style from './index.less'

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
            <Header className={style.header}>
                <img alt="logo" style={{ float: 'left' }} src={logoSrc} height={50} />
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
