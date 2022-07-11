import './mainNav.scss'
import template from './mainNav.hbs'
import TextInput from './components/TextInput'
import RadioGroup from './components/RadioGroup'
import BurgerMenu from './components/BurgerMenu'
import AddChat from './components/AddChat'
import Block from '../../framework/Block'
import avatar from '../../assets/avatar.png'
import { getChats } from '../../services/chats'

const store = {

}

class MainNav extends Block {
    constructor(props) {
        super({
            props: {
                ...props,
                people: [],
                BurgerMenu: new BurgerMenu({}),
                RadioGroup: new RadioGroup({
                    items: [
                        {
                            label: 'robots',
                        },
                        {
                            label: 'people',
                        },
                        {
                            label: 'groups',
                        },
                        {
                            label: 'new',
                        },
                    ]
                }),
                TextInput: new TextInput({ grow: true }),
                AddChat: new AddChat({ res: 'loadd' }),
            }
        })
    }

    componentDidMount() {
       getChats().then((res: { response: any[] }) => {
            this.resetProps('people', res.response.map(({ title }) => ({name: title, avatar})))
        })
    }
    render() {
        return template
    }
}

export default MainNav
