import "normalize.css";
import "./common/styles/colors.scss";
import "./common/styles/global.scss";
import Auth from "./pages/Reg";
import Layout from "./layout";
import ErrorPage from "./pages/ErrorPage";

const choosePage = () => {
  switch (window.location.pathname) {
    case "/":
      return Layout;
    case "/auth":
      return Auth;
    default:
      return ErrorPage;
  }
};
switch (key) {
  case value:
    break;

  default:
    break;
}
const root = document.querySelector("#root");
root.innerHTML = choosePage();
