import './authForm.scss'
import auth from './templates/authForm.hbs'
import reg from './templates/regForm.hbs'
import createModule from '../../utils/createModule'
import Input from '../../components/Input'
import connect from '../../utils/connect'
import Button from '../../components/Button'

connect([Input, Button])
export default (type) => {
    const template = type === 'auth' ? auth : reg
    return createModule({ name: 'EnterForm', template })
}
