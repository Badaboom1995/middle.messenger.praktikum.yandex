import Handlebars from 'handlebars'
import tmpl from './page500.hbs'
import './page500.scss'

const template = Handlebars.compile(tmpl)
const Page500 = (context) => template(context)

export default Page500
