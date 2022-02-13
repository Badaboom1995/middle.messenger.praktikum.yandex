import template from './input.hbs';
import './input.scss';
import Block from '../../framework/Block';

type TInputProps = {
    label: string
    placeholder: string
    type: string
}

class Input extends Block {
    constructor(props: TInputProps) {
        super({ props })
        this.props = props
        this._template = template
    }
    render() {
        const { label, placeholder, type } = this.props
        return this.compile(template, { label, placeholder, type })
    }
}

export default Input
