import React, { Component } from 'react'
import { Layout } from 'antd'

const { Sider, Content } = Layout

export default class About extends Component {
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#999' }} />
                <Layout>
                    <Content>
                        About
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
