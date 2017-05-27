import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Content, Sider } = Layout

export default class News extends Component {
    static propTypes = {
        params: PropTypes.object
    }
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#999' }} />
                <Layout>
                    <Content>
                        News { this.props.params.id ? this.props.params.id : '' }
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
