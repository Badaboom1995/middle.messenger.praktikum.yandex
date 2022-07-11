import './enterForm.scss'
import Router from '../../router/Router'
import Block from '../../framework/Block'
import AuthForm from './components/AuthForm'
import RegForm from './components/RegForm'
import validate from '../../utils/validate'
import getFormData from '../../utils/getFormData'
import { auth, reg } from '../../services/user'


const router = new Router()
const onFormValid = (e) => {
    const data = getFormData(e)
    // TODO split
    const method = data.email ? auth : reg
    if(data.email){
        data.login = data.email
    }
    method(data).then(() => {
        router.go('/')
    }).catch((e) => {
        alert('error')
    })
}

const validation = {
    form: validate.form(onFormValid),
    field: validate.field
}


const chooseFormByType = (type: 'auth' | 'reg'): Block => type === 'auth' ? new AuthForm(validation) : new RegForm(validation)
export default chooseFormByType
