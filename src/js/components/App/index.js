import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//iconos
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee, faHeart);

//components
import Layout from "../Layout";

//pages
import BadgeNew from "../../pages/BadgeNew";
import Badges from "../../pages/Badges";
import NotFound from "../../pages/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges/b" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact component={NotFound} />
            {/* <Route
            exact
            path="/badge"
            component={() => <Badge {...this.props} isAuthed={true} />}
          /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
