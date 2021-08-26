var StyleColors = {
  Page: "#E5E5E5",
  NavBar: "#FFFFFF"
};

setCSS("body", "background-color", StyleColors.Page);

var CoreApp = createElement("CoreApp", "div", "body", {
  "position": "relative",
  "width": "800px",
  "height": "5000px",
  "max-width": "100%",
  "left": "50%",
  "top": "0px",
  "transform": "translateX(-50%)",
  "background-color": "blue",
});

var NavBar = createElement("NavBar", "div", CoreApp, {
  "position": "sticky",
  "width": "100%",
  "height": "150px",
  //"left": "8px",
  "top": "0px",
  "background-color": StyleColors.NavBar,
  "border-radius": "8px"
});
