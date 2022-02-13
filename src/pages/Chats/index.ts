import './chats.scss'
import Layout from '../../layout'
import MainNav from '../../modules/MainNav'
import Profile from '../../modules/Profile'
import Chat from '../../modules/Chat'
import Avatar from '../../components/Avatar'
import { profile, chats } from './context'

const profileBlock = new Profile({
    ...profile,
    avatar: new Avatar({}),
    events: {
        click: (e) => {
            console.log('click')
        }
    }
})
const chat = new Chat({})
const mainNav = new MainNav(chats)

export default new Layout({ aside: profileBlock, nav: mainNav, main: chat })

