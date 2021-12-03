import Handlebars from 'handlebars'
import SetEnterForm from '../../modules/EnterForm'
import connect from '../../utils/connect'
import tmpl from './enter.hbs'
import './enter.scss'

export default (type) => {
    const EnterForm = SetEnterForm(type)
    connect([EnterForm])

    const template = Handlebars.compile(tmpl)
    const Enter = template()

    return Enter
}
