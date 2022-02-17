import template from './authForm.hbs'


import Block from '../../../../framework/Block'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

const ButtonBlock = new Button({ text: 'Авторизоваться' })
const Login = new Input({ label: 'Логин', placeholder: 'mail@yandex.com', type: 'text' })
const Password = new Input({ label: 'Пароль', placeholder: 'nonbrutforcable', type: 'password' })

class AuthForm extends Block {
    constructor() {
        super({ props: { Login, Password, ButtonBlock } })
    }
    render() {
        return template
    }

}

export default AuthForm
