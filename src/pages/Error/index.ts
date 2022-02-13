
import Block from '../../framework/Block'
import template from './page500.hbs'
import './page500.scss'

type TErrorPage = {
    title: string
    subtitle: string
}
class ErrorPage extends Block {
    constructor(props: TErrorPage) {
        super({ props })
    }
    render() {
        return this.compile(template, this.props)
    }
}


export default ErrorPage

