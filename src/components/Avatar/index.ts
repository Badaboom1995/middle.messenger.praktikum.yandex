import './avatar.scss'
import template from './avatar.hbs'
import Block from '../../framework/Block'
import url from '../../assets/avatar.png'

class Avatar extends Block {
    constructor(props) {
        super({ props: { ...props, url } })
    }
    render() {
        return template
    }
}



export default Avatar