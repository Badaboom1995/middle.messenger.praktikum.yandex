import './chat.scss'
import Block from '../../framework/Block'
import template from './chat.hbs'
import Input from '../../components/Input'
import userPhoto from '../../assets/avatar.png'


const input = new Input({ label: '', placeholder: '', type: 'text' })

class Chat extends Block {
    constructor(props) {
        super({ tagName: 'div', props: { ...props, userPhoto } })
        this._template = template
    }
    render() {
        input.makePartial()
        return this.compile(template, this.props)
    }

}

export default Chat
