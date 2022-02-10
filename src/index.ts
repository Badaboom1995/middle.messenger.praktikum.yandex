import 'normalize.css'
import './common/styles/colors.scss'
import './common/styles/global.scss'
// import Enter from './pages/Enter'
// import ErrorPage from './pages/Error'
import Chats from './pages/Chats'
import { render } from './framework/Render'
import Avatar from './components/Avatar'

const notFoundData = { title: '404', subtitle: 'Потерялись' }
const error = { title: '500', subtitle: 'Уже чиним' }

// const choosePage = () => {
//     switch (window.location.pathname) {
//         case '/':
//             return Chats()
//         case '/auth':
//             return Enter('auth')
//         case '/reg':
//             return Enter('reg')
//         case '/500':
//             return ErrorPage(error)
//         default:
//             return ErrorPage(notFoundData)
//     }
// }


const ChatsPage = new Chats({
    status: 'Это я',
    name: 'Peter',
    avatar: new Avatar({}),
    events: {
        click: (e) => {
            console.log('click')
        }
    }
})

render('#root', ChatsPage)
