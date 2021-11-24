import Handlebars from "handlebars";
import MainNav from "../modules/MainNav";
import connect from "../utils/connect";
import tmpl from "./layout.hbs";
import "./layout.scss";
connect([MainNav]);

const template = Handlebars.compile(tmpl);
const Layout = template();

export default Layout;
