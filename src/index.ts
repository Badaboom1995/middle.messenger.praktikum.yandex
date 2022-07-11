import 'normalize.css'
import './common/styles/colors.scss'
import './common/styles/global.scss'
import Enter from './pages/Enter'
import ErrorPage from './pages/Error'
import Chats from './pages/Chats'
import Router from './router/Router'
import { makeRequest } from './utils/makeRequest'
import { getUser } from './services/user'
import { getChats } from './services/chats'

const authForm = new Enter({ type: 'auth' })
const regForm = new Enter({ type: 'reg' })
const errorPage = new ErrorPage({ title: '500', subtitle: 'Уже чиним' })
const notFound = new ErrorPage({ title: '404', subtitle: 'Потерялись' })

const router = new Router()
const loading = true


router
    .use('/', Chats)
    .use('/chats', Chats)
    .use('/auth', authForm)
    .use('/reg', regForm)
    .use('/500', errorPage)
    .setNotFound(notFound)
    .setPublic('/reg', regForm)
    .setPublic('/auth', authForm)
    .setPublic('/', authForm)
    .start()

    getUser().then((result) => {
        router.allowPrivate()
        router.go('/')
    })




// router
//     .use('/', Chats)
//     .use('/chats', Chats)
//     .use('/auth', authForm)
//     .use('/reg', regForm)
//     .use('/reg', regForm)
//     .use('/500', errorPage)
//     .setDefault(notFound)
//     .start()




