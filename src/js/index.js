//import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../css/global.css";
import "../css/buttons.css";

// import pokemon from "./api/pokemon/index.js";
//import render from "./render/index.js";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

function render() {
  ReactDOM.render(<App />, document.getElementById("container"));
}

render();

if (module.hot) {
  module.hot.accept("./components/App", function() {
    render();
  });
}

/*
import text from "./text";
text();

if (module.hot) {
  module.hot.accept("./text.js", function() {
    text();
  });
}
/*
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const apiPokemon = new pokemon(baseUrl);
apiPokemon
  .search(25)
  .then(data => {
    console.log(data);
    render(data);
  })
  .catch(() => {
    console.log("No hubo pokemon");
  });
*/
