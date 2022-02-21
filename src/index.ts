import 'normalize.css'
import './common/styles/colors.scss'
import './common/styles/global.scss'
import Enter from './pages/Enter'
import ErrorPage from './pages/Error'
import Chats from './pages/Chats'
import { render } from './framework/Render'

const notFoundData = { title: '404', subtitle: 'Потерялись' }
const error = { title: '500', subtitle: 'Уже чиним' }

const choosePage = () => {
    switch (window.location.pathname) {
        case '/':
            return Chats
        case '/chat':
            return Chats
        case '/auth':
            return new Enter({ type: 'auth' })
        case '/reg':
            return new Enter({ type: 'reg' })
        case '/500':
            return new ErrorPage(error)
        default:
            return new ErrorPage(notFoundData)
    }
}




render('#root', choosePage())
