import Handlebars from 'handlebars'

const createModule =
    ({ name, template, props }) =>
    () => {
        console.log(props)
        const tmpl = Handlebars.compile(template)
        const node = tmpl(props)
        Handlebars.registerPartial(name, (context) => tmpl(context || props))
        return node
    }

export default createModule
