import Block from '../../../../framework/Block'
import template from './burgerMenu.hbs'
import './burgerMenu.scss'

class BurgerMenu extends Block {
    constructor(props) {
        super({ props })
        this._template = template
    }
    render() {
        return template
    }

}

export default BurgerMenu
