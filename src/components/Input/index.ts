import template from './input.hbs';
import './input.scss';
import Block from '../../framework/Block';
import { v4 as makeUUID } from 'uuid';


type TInputProps = {
    label?: string
    placeholder?: string
    type?: string
}

class Input extends Block {
    constructor(props: TInputProps) {
        const inputId = makeUUID()
        super({ props: { ...props, inputId } })
    }
    render() {
        return template
    }
}

export default Input
