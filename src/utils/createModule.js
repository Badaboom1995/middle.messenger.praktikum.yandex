import Handlebars from "handlebars";

const createModule =
  ({ name, template, props }) =>
  () => {
    const tmpl = Handlebars.compile(template);
    const node = tmpl(props);
    return Handlebars.registerPartial(name, (context) => tmpl(context));
  };

export default createModule;
