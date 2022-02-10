import './mainNav.scss'

import tmpl from './mainNav.hbs'
// import TextInput from './components/TextInput'
// import ChatCard from '../../components/ChatCard'
// import RadioGroup from './components/RadioGroup'
// import BurgerMenu from './components/BurgerMenu'
import context from './context'


const MainNav = tmpl({ ...context })

export default MainNav
