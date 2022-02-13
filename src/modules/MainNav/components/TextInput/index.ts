import Block from '../../../../framework/Block'
import template from './textInput.hbs'
import './textInput.scss'

class TextInput extends Block {
    constructor(props) {
        super({ props })
        this._template = template
    }
    render() {
        return this.compile(template, this.props)
    }

}

export default TextInput
