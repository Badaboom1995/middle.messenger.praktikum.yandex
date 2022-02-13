import './mainNav.scss'
import *  as Handlebars from 'handlebars'
import template from './mainNav.hbs'
import TextInput from './components/TextInput'
import ChatCard from '../../components/ChatCard'
import RadioGroup from './components/RadioGroup'
import BurgerMenu from './components/BurgerMenu'
import Block from '../../framework/Block'
import Avatar from '../../components/Avatar'

const chatCard = new ChatCard({})
const textInput = new TextInput({})
const radioGroup = new RadioGroup({})
const burgerMenu = new BurgerMenu({})

class MainNav extends Block {
    constructor(props) {
        super({ tagName: 'div', props })
    }
    render() {
        chatCard.makePartial()
        textInput.makePartial()
        radioGroup.makePartial()
        burgerMenu.makePartial()
        return this.compile(template, this.props)
    }

}


export default MainNav
