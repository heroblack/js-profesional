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
import Ricky from "../Ricky";
import BadgeEdit from "../../pages/BadgeEdit";
import BadgeDetailsContainer from "../../pages/BadgeDetailsContainer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route
              exact
              path="/badges/:badgeId"
              component={BadgeDetailsContainer}
            />
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
            <Route exact path="/ricky" component={Ricky} />
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
