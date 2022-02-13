import Block from '../../../../framework/Block'
import template from './burgerMenu.hbs'
import './burgerMenu.scss'

class BurgerMenu extends Block {
    constructor(props) {
        super({ props })
        this._template = template
    }
    render() {
        return this.compile(template, this.props)
    }

}

export default BurgerMenu
