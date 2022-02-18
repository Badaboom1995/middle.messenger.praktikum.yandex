
import template from './regForm.hbs'

import Block from '../../../../framework/Block'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

const ButtonBlock = new Button({ text: 'Авторизоваться' })

class RegForm extends Block {
    constructor(validation) {
        const fieldValidation = { events: validation.field }
        super({
            props: {
                Email: new Input({ label: 'Почта', name: 'email', placeholder: 'mail@yandex.com', type: 'text', ...fieldValidation }),
                Name: new Input({ label: 'Имя', name: 'name', placeholder: 'Иван', type: 'text', ...fieldValidation }),
                Surname: new Input({ label: 'Фамилия', name: 'surname', placeholder: 'Иванов', type: 'text', ...fieldValidation }),
                Phone: new Input({ label: 'Телефон', name: 'phone', placeholder: 'nonbrutforcable', type: 'text', ...fieldValidation }),
                Password: new Input({ label: 'Пароль', name: 'password', placeholder: 'Иванов', type: 'password', ...fieldValidation }),
                RepeatPassword: new Input({ label: 'Пароль (еще раз)', name: 'repeatPassword', placeholder: 'Иванов', type: 'password', ...fieldValidation }),
                ButtonBlock,
                alternativeButtonText: 'Есть аккаунт?',
                events: validation.form
            }
        })
    }
    render() {
        return template
    }

}

export default RegForm
