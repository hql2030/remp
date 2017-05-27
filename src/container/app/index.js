import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'antd'

import Header from '../../component/header'
import Footer from '../../component/footer'

import modelSelector from './selector'
import { containerActions } from './actions'

@connect(modelSelector, containerActions)
export default class App extends Component {
    static propTypes = {
        children: PropTypes.object,
        addCount: PropTypes.func,
        appModel: PropTypes.object
    }
    constructor() {
        super()
        this.state = {
            conHeight: ''
        }
    }
    componentWillMount() {
        /* global window */
        const winHeight = window.innerHeight
        const conHeight = winHeight - 100
        this.setState({
            conHeight: `${conHeight}px`
        })
        switch (conHeight) {
            case '222':
                break
            default:
        }
        this.props.addCount(5)
    }
    render() {
        console.log(this.props.appModel.get('count'))
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
