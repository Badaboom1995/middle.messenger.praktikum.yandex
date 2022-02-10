import * as Handlebars from 'handlebars'

const createModule =
    ({ name, template, props }) =>
        () => {
            const node = template(props)
            console.log('props')
            Handlebars.registerPartial(name, (context) => template(context || props))
            return node
        }

export default createModule
