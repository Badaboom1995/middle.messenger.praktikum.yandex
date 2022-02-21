import './enterForm.scss'

import Block from '../../framework/Block'
import AuthForm from './components/AuthForm'
import RegForm from './components/RegForm'
import validate from '../../utils/validate'

const onFormValid = () => { window.location.href = '/' }
const validation = {
    form: validate.form(onFormValid),
    field: validate.field
}


const chooseFormByType = (type: 'auth' | 'reg'): Block => type === 'auth' ? new AuthForm(validation) : new RegForm(validation)
export default chooseFormByType
