import Handlebars from "handlebars";
export default (function () {
  Handlebars.registerHelper("loud", function (aString) {
    return aString.toUpperCase();
  });
});
