import './chats.scss'
import Layout from '../../layout'
import MainNav from '../../modules/MainNav'
import Profile from '../../modules/Profile'
import Chat from '../../modules/Chat'
import Avatar from '../../components/Avatar'
import { profile } from './context'
import { getChats } from '../../services/chats'

const profileBlock = new Profile({
    ...profile,
    avatar: new Avatar({}),
    events: {
        click: (e) => {
            console.log('click')
        }
    }
})
let chats = [{ name: 'ololo' }]

setTimeout(() => {
    chats = [{ name: 'ololo' }, { name: 'wwwdwdd'}]
}, 1000)


const chat = new Chat({})

const mainNav = new MainNav({chats:[{ name: 'ololo' }]})

export default new Layout({ aside: profileBlock, nav: mainNav, main: chat })

