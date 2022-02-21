import './chat.scss'
import Block from '../../framework/Block'
import template from './chat.hbs'
import Input from '../../components/Input'
import userPhoto from '../../assets/avatar.png'


const MessageInput = new Input({ label: '', placeholder: 'placeforthisshit', type: 'text' })

class Chat extends Block {
    constructor(props) {
        super({ props: { ...props, userPhoto, MessageInput } })
    }
    render() {
        return template
    }

}

export default Chat
