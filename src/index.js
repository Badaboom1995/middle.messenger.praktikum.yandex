import 'normalize.css'
import './common/styles/colors.scss'
import './common/styles/global.scss'
import Enter from './pages/Enter'
import Layout from './layout'
import ErrorPage from './pages/ErrorPage'
import MainNav from './modules/MainNav'
import Chats from './pages/Chats'

const notFoundData = { title: '404', subtitle: 'Потерялись' }
const error = { title: '500', subtitle: 'Уже чиним' }

const choosePage = () => {
    switch (window.location.pathname) {
        case '/':
            return Chats()
        case '/auth':
            return Enter('auth')
        case '/reg':
            return Enter('reg')
        case '/500':
            return ErrorPage(error)
        default:
            return ErrorPage(notFoundData)
    }
}

const root = document.querySelector('#root')
root.innerHTML = choosePage()
