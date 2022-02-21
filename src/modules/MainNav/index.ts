import './mainNav.scss'
import template from './mainNav.hbs'
import TextInput from './components/TextInput'
import RadioGroup from './components/RadioGroup'
import BurgerMenu from './components/BurgerMenu'
import Block from '../../framework/Block'
import avatar from '../../assets/avatar.png'



class MainNav extends Block {
    constructor(props) {
        super({
            props: {
                ...props,
                people: [
                    {
                        name: 'Nils',
                        avatar,
                        online: true,
                        messages: 5,
                    },
                    {
                        name: 'Yehuda',
                        avatar,
                        online: false,
                        messages: 0,
                    },
                    {
                        name: 'Samanta',
                        avatar,
                        online: false,
                        messages: 0,
                    },
                ],
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
            }
        })
    }

    render() {
        return template
    }

}

export default MainNav
