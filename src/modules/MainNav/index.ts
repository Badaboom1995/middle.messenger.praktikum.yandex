import './mainNav.scss'
import template from './mainNav.hbs'
import TextInput from './components/TextInput'
import ChatCard from '../../components/ChatCard'
import RadioGroup from './components/RadioGroup'
import BurgerMenu from './components/BurgerMenu'
import Block from '../../framework/Block'


const chatCard = new ChatCard({})
class MainNav extends Block {
    constructor(props) {
        super({
            props: {
                ...props,
                BurgerMenu: new BurgerMenu({}),
                RadioGroup: new RadioGroup({ items: props.items }),
                TextInput: new TextInput({ grow: true }),
            }
        })
    }
    render() {
        chatCard.makePartial()
        return template
    }

}

export default MainNav
