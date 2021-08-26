var StyleColors = {
  Page: "#E5E5E5",
  NavBar: "#FFFFFF"
};

setCSS("body", "background-color", StyleColors.Page);

var CoreApp = createElement("CoreApp", "div", "body", {
  "width": "800px",
  "max-width": "100%",
  "left": "50%",
  "top": "0px",
  "transform": "translateX(-50%)"
});

createElement("NavBar", "div", CoreApp, {
  "position": "sticky",
  "width": "calc(100% - 16px)",
  "height": "150px",
  "left": "8px",
  "top": "8px",
  "background-color": StyleColors.NavBar
});

