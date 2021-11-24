import Handlebars from "handlebars";
import tmpl from "./page500.hbs";
import "./page500.scss";

const pageData = {
  error: { title: "500", subtitle: "Уже чиним" },
  notfound: { title: "404", subtitle: "Потерялись" },
};

const context =
  window.location.pathname === "/500" ? pageData.error : pageData.notfound;

const template = Handlebars.compile(tmpl);
const Page500 = template(context);

export default Page500;
