const validate = {
    field: {
        focus: (e) => {
            if (!e.target.value) {
                console.log(`Тут могла быть валидация, но проверка по фокусу это странно`)
            }
        },
        blur: (e) => {
            if (!e.target.value) {
                alert(`Поле ${e.target.getAttribute('name')} нужно заполнить`)
            }
        }
    },
    form: (callback) => ({
        submit: (e) => {
            e.preventDefault()
            let isValid = true
            e.target.querySelectorAll('input').forEach(item => {
                if (!item.value) {
                    isValid = false
                }
            })
            if (!isValid) {
                alert('Заполните все поля')
                return
            }
            callback()
        },
    }),
}

export default validate