import Handlebars from "handlebars";
import tmpl from "./mainNav.hbs";
import "./mainNav.scss";
import connect from "../../utils/connect";
import TextInput from "./components/TextInput";
import ChatCard from "../../components/ChatCard";
import RadioGroup from "./components/RadioGroup";
import BurgerMenu from "./components/BurgerMenu";
import context from "./context";

connect([TextInput, ChatCard, RadioGroup, BurgerMenu]);

const template = Handlebars.compile(tmpl);
const MainNav = template(context);
export default (function () {
  Handlebars.registerPartial("MainNav", MainNav);
});
