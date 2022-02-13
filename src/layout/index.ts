import Block from '../framework/Block'
import template from './layout.hbs'
import './layout.scss'
type TLayoutProps = {
    nav: Block,
    main: Block,
    aside: Block
}
class Layout extends Block {
    constructor(props: TLayoutProps) {
        super({ tagName: 'div', props })
    }
    render() {
        return this.compile(template, this.props)
    }

}
export default Layout

