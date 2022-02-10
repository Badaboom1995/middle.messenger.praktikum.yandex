import './profile.scss'
import Block from '../../framework/Block'
import tmpl from './profile.hbs'
import context from './context'


// const AvatarComponent = new Avatar
// const AvatarTemplate = AvatarComponent.getTemplate()

class Profile extends Block {
    constructor(props) {
        super({ tagName: 'div', props })

    }
    render() {
        console.log('this.props')
        return this.compile(tmpl, this.props)
    }

}

export default Profile
