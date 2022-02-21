import template from './button.hbs'
import './button.scss'
import Block from '../../framework/Block'

class Button extends Block {
    constructor(props) {
        super({ props })
    }
    render() {
        return template
    }
}

export default Button
