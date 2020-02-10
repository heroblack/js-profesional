import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gravatar from "../Gravatar";
class BadgesListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Gravatar
                className="avatar"
                email={this.props.badge.email}
                alt="avatar"
              />
            </div>
            <div className="col-9">
              <p className="mb-0 font-weight-bold">
                {this.props.badge.firstName} {this.props.badge.lastName}
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
                @{this.props.badge.twitter}
              </p>
              <small className="mb-0">{this.props.badge.jobTitle}</small>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgesListItems;
