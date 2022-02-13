import Block from '../../framework/Block'
import EnterForm from '../../modules/EnterForm'
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
                enterForm: new EnterForm({ type: props.type })
            }
        })
    }
    render() {
        this.children.enterForm.makePartial()
        return this.compile(template, this.props)
    }

}

export default EnterPage
