
import template from './regForm.hbs'

import Block from '../../../../framework/Block'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

const ButtonBlock = new Button({ text: 'Авторизоваться' })

const fileds = {
    Email: new Input({ label: 'Почта', placeholder: 'mail@yandex.com', type: 'text' }),
    Name: new Input({ label: 'Имя', placeholder: 'Иван', type: 'text' }),
    Surname: new Input({ label: 'Фамилия', placeholder: 'Иванов', type: 'text' }),
    Phone: new Input({ label: 'Фамилия', placeholder: 'nonbrutforcable', type: 'text' }),
    Password: new Input({ label: 'Пароль', placeholder: 'Иванов', type: 'password' }),
    RepeatPassword: new Input({ label: 'Пароль (еще раз)', placeholder: 'Иванов', type: 'password' })
}

class RegForm extends Block {
    constructor() {
        super({ props: { ...fileds, ButtonBlock, alternativeButtonText: 'Есть аккаунт?' } })
    }
    render() {
        return template
    }

}

export default RegForm
