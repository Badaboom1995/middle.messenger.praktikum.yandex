import Block from '../../../../framework/Block'
import template from './radioGroup.hbs'
import './radioGroup.scss'

class RadioGroup extends Block {
    constructor(props) {
        super({ props })
        this._template = template
    }
    render() {
        return this.compile(template, this.props)
    }

}

export default RadioGroup
