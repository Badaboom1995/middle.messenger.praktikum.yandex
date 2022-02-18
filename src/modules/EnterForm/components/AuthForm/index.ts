import template from './authForm.hbs'

import Block from '../../../../framework/Block'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

const ButtonBlock = new Button({ text: 'Авторизоваться', type: 'submit' })

type TFormProps = {
    form: any,
    field: any
}
class AuthForm extends Block {
    constructor(validation: TFormProps) {
        const children = {
            Login: new Input({
                label: 'Логин',
                name: 'login',
                placeholder: 'mail@yandex.com',
                type: 'text',
                events: validation.field
            }),
            Password: new Input({
                label: 'Пароль',
                name: 'password',
                placeholder: 'nonbrutforcable',
                type: 'password',
                events: validation.field
            }),
            ButtonBlock
        }
        super({ props: { ...children, events: validation.form } })
    }
    render() {
        return template
    }

}

export default AuthForm
