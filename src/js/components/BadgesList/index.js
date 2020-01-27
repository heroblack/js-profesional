import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BadgesList.css";
class BadgesList extends Component {
  render() {
    return (
      <Fragment>
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className="badgesListItems mb-2">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="avatar"
                        src={badge.avatarUrl}
                        alt="avatar"
                      />
                    </div>
                    <div className="col-9">
                      <p className="mb-0 font-weight-bold">
                        {badge.firstName} {badge.lastName}
                        {/* <FontAwesomeIcon icon="check-square" />
                  <FontAwesomeIcon icon="coffee" /> */}
                        {/* <FontAwesomeIcon
                    icon="heart"
                    className="twitter"
                    // flip="horizontal"
                    // rotation={90}
                    // listItem
                    // pull="right"
                    swapOpacity
                  /> */}
                        {/* <FontAwesomeIcon icon={["fad", "stroopwafel"]} /> */}
                      </p>
                      <p className="mb-0 text-primary">
                        <FontAwesomeIcon
                          icon={["fab", "twitter"]}
                          className="twitter"
                        />
                        @{badge.twitter}
                      </p>
                      <small className="mb-0">{badge.jobTitle}</small>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default BadgesList;
