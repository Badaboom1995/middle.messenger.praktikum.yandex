import Block from '../../framework/Block'
import template from './chatCard.hbs'
import './chatCard.scss'
class ChatCard extends Block {
    constructor(props) {
        super({ props })
    }
    render() {
        return template
    }

}

export default ChatCard
