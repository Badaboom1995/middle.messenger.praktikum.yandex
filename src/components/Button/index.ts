import template from './button.hbs'
import './button.scss'
import Block from '../../framework/Block';

class Button extends Block {
    constructor(props) {
        super({ props })
        this.props = props
        this._template = template
    }
    render() {
        const { text } = this.props
        return template
    }
}

export default Button
