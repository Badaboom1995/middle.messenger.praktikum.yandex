import createModule from "../../utils/createModule";
import tmpl from "./avatar.hbs";
import "./avatar.scss";
import url from "./nonCircle.svg";

export default createModule({
  name: "Avatar",
  template: tmpl,
  props: { url },
});
