import Block from '../../framework/Block'
import createModule from '../../utils/createModule'
import template from './chatCard.hbs'
import './chatCard.scss'

class ChatCard extends Block {
    constructor(props) {
        super({ props })
        this._template = template
    }
    render() {
        return this.compile(template, this.props)
    }

}

export default ChatCard
