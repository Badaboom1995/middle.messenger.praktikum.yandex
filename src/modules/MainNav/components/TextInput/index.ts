import Block from '../../../../framework/Block'
import template from './textInput.hbs'
import './textInput.scss'

class TextInput extends Block {
    constructor(props) {
        super({ props, grow: true })
    }
    render() {
        return template
    }

}

export default TextInput
