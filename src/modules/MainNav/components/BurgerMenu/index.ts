import Block from '../../../../framework/Block'
import template from './burgerMenu.hbs'
import './burgerMenu.scss'
import { Link } from '../../../../router/Link/Link'
import { makeRequest } from '../../../../utils/makeRequest'

class BurgerMenu extends Block {
    constructor(props) {
        super({
            props: {
                LogoutButton: new Link({
                    href: '/auth',
                    label: 'logout',
                    events: {
                        click: (e) => {
                            e.preventDefault()
                            makeRequest('POST', '/auth/logout')
                            console.log('ad')
                        }
                    }
                })
            }
        })
    }
    render() {
        return template
    }

}

export default BurgerMenu
