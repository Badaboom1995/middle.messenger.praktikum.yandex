import Handlebars from "handlebars";
import AuthForm from "../../modules/AuthForm";
import connect from "../../utils/connect";
import tmpl from "./reg.hbs";
import "./reg.scss";

connect([AuthForm]);

const template = Handlebars.compile(tmpl);
const Auth = template();

export default Auth;
