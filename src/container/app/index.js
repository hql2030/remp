import React, { Component, PropTypes } from 'react'
import { Layout } from 'antd'

import Header from '../../component/header'
import Footer from '../../component/footer'

export default class App extends Component {
    propTypes = {
        children: PropTypes.object
    }
    constructor() {
        super()
        this.state = {
            conHeight: ''
        }
    }
    componentWillMount() {
        /* global window b:true */
        const winHeight = window.innerHeight
        const conHeight = winHeight - 100
        this.setState({
            conHeight: `${conHeight}px`
        })
        switch (conHeight) {
            case '222':
                console.log('sdfksj')
                break
            default:
        }
    }
    render() {
        return (
            <Layout>
                <Header />
                <Layout style={{ height: this.state.conHeight }}>
                    {this.props.children}
                </Layout>
                <Footer />
            </Layout>
        )
    }
}
