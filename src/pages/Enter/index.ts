import Block from '../../framework/Block'
import getEnterForm from '../../modules/EnterForm'
import template from './enter.hbs'
import './enter.scss'

type TEnterPage = {
    type: 'auth' | 'reg'
}


class EnterPage extends Block {
    constructor(props: TEnterPage) {
        super({
            props: {
                ...props,
                enterForm: getEnterForm(props.type)
            }
        })
        this._template = template
    }
    render() {
        return template
    }

}

export default EnterPage
