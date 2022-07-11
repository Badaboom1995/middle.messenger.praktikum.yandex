import template from './button.hbs'
import './button.scss'
import Block from '../../framework/Block'
import * as events from 'events'

class Button extends Block {
    constructor(props) {
        super({
            props: {
                ...props,
            }
        })
    }
    render() {
        return template
    }
}

export default Button
