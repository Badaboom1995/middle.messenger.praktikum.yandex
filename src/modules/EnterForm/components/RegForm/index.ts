
import template from './regForm.hbs'

import Block from '../../../../framework/Block'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { Link } from '../../../../router/Link/Link'

const ButtonBlock = new Button({
    text: 'Авторизоваться'
})

class RegForm extends Block {
    constructor(validation) {
        const fieldValidation = { events: validation.field }
        super({
            props: {
                Email: new Input({ label: 'Почта', name: 'email', placeholder: 'mail@yandex.com', type: 'text', ...fieldValidation }),
                Name: new Input({ label: 'Имя', name: 'first_name', placeholder: 'Иван', type: 'text', ...fieldValidation }),
                Surname: new Input({ label: 'Фамилия', name: 'second_name', placeholder: 'Иванов', type: 'text', ...fieldValidation }),
                Phone: new Input({ label: 'Телефон', name: 'phone', placeholder: 'nonbrutforcable', type: 'text', ...fieldValidation }),
                Password: new Input({ label: 'Пароль', name: 'password', placeholder: 'Иванов', type: 'password', ...fieldValidation }),
                RepeatPassword: new Input({ label: 'Пароль (еще раз)', name: 'repeatPassword', placeholder: 'Иванов', type: 'password', ...fieldValidation }),
                ButtonBlock,
                AlterButton: new Link({href: '/auth', label:'Есть аккаунт?', class: 'auth-form__alternative-button auth-form__alternative-button--underline'}),
                events: validation.form
            }
        })
    }
    render() {
        return template
    }

}

export default RegForm
