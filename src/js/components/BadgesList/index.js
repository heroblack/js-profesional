import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BadgesList.css";

import BadgesListItems from "../BadgesListItems";
class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No were found any Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      );
    }

    return (
      <Fragment>
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className="badgesListItems mb-2">
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <BadgesListItems badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default BadgesList;
