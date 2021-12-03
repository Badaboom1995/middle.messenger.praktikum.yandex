import Handlebars from 'handlebars'
import tmpl from './layout.hbs'
import './layout.scss'
import Avatar from '../components/Avatar'
import connect from '../utils/connect'

connect([Avatar])

export default ({ nav, main, aside }) => {
    const template = Handlebars.compile(tmpl)
    const Layout = template({ nav, main, aside })
    return Layout
}
