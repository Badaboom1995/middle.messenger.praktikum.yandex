import './mainNav.scss'

import tmpl from './mainNav.hbs'
import connect from '../../utils/connect'
import TextInput from './components/TextInput'
import ChatCard from '../../components/ChatCard'
import RadioGroup from './components/RadioGroup'
import BurgerMenu from './components/BurgerMenu'
import context from './context'
import createModule from '../../utils/createModule'

connect([TextInput, ChatCard, RadioGroup, BurgerMenu])

export default createModule({ name: 'MainNav', template: tmpl, props: context })
