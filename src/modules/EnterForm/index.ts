import './enterForm.scss'

import Block from '../../framework/Block'
import AuthForm from './components/AuthForm'
import RegForm from './components/RegForm'


const chooseFormByType = (type: 'auth' | 'reg'): Block => type === 'auth' ? new AuthForm() : new RegForm()
export default chooseFormByType
