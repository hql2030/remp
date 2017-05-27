import { createStructuredSelector } from 'reselect'

const modelSelector = createStructuredSelector({
    appModel: state => state.app
})
export default modelSelector
