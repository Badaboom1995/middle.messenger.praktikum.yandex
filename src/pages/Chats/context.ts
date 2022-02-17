import avatar from '../../assets/avatar.png'
export const profile = {
    avatar,
    name: 'Иван Иванов',
    status: 'Это ты',
    general: [
        {
            name: 'Ник',
            value: 'Sanya007',
        },
        {
            name: 'Почта',
            value: 'pochta@yandex.ru',
        },
        {
            name: 'Логин',
            value: 'ivanivanov',
        },
        {
            name: 'Пароль',
            value: '*********',
        },
        {
            name: 'Телефон',
            value: '+7 (909) 967 30 30',
        },
        {
            name: 'Профессия',
            value: 'Кассир',
        },
    ],
    items: [
        {
            label: 'robots',
        },
        {
            label: 'people',
        },
        {
            label: 'groups',
        },
        {
            label: 'new',
        },
    ],
}

export const chats = [
    {
        name: 'Nils',
        avatar,
        online: true,
        messages: 5,
    },
    {
        name: 'Yehuda',
        avatar,
        online: false,
        messages: 0,
    },
    {
        name: 'Samanta',
        avatar,
        online: false,
        messages: 0,
    },
]



