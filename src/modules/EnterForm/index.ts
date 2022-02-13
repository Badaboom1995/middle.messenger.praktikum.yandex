import './authForm.scss'
import auth from './templates/authForm.hbs'
import reg from './templates/regForm.hbs'

import Block from '../../framework/Block'
import Input from '../../components/Input'
import Button from '../../components/Button'

const input = new Input({})
const buttonObj = new Button({})

class EnterForm extends Block {
    constructor(props: { type: 'auth' | 'reg' }) {
        super({ props })
        this._template = props.type === 'auth' ? auth : reg
    }
    render() {
        input.makePartial()
        buttonObj.makePartial()
        const currentTemplate = this.props.type === 'auth' ? auth : reg
        return this.compile(currentTemplate, this.props)
    }

}

export default EnterForm
