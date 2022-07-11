import Block from '../../../../framework/Block'
import template from './addChat.hbs'
import Input from '../../../../components/Input'
import './addChat.scss'
import getFormData from '../../../../utils/getFormData'
import { createChat } from '../../../../services/chats'

class AddChat extends Block {
    constructor(props) {
        super({
            props: {
                ...props,
                Name: new Input({
                    label: '',
                    name: 'title',
                    placeholder: 'Имя чата',
                    type: 'text',
                }),
                events: {
                    submit: (e) => {
                        const data = getFormData(e)
                        e.preventDefault()
                        createChat(data)
                    }
                }
            }
        })
    }
    render() {
        return template
    }
}

export default AddChat
