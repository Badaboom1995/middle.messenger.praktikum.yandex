import './profile.scss'
import Block from '../../framework/Block'
import tmpl from './profile.hbs'
class Profile extends Block {
    constructor(props) {
        super({ tagName: 'div', props })

    }
    render() {
        return this.compile(tmpl, this.props)
    }

}

export default Profile
