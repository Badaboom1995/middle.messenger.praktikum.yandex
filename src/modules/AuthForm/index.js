import template from "./authForm.hbs";
import "./authForm.scss";
import createModule from "../../utils/createModule";
import Input from "../../components/Input";
import connect from "../../utils/connect";
import Button from "../../components/Button";

connect([Input, Button]);

export default createModule({ name: "AuthForm", template });
