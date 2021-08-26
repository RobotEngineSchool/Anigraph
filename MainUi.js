var StyleColors = {
  PageColor: "#E5E5E5",
};

setCSS("body", "background-color", StyleColors.PageColor);

createElement("CoreApp", "div", "body", {
  "width": "800px",
  "max-width": "100%",
  "top": "0px",
  "height": "100vh",
  "left": "50%",
  "transform": "translateX(-50%)"
});

