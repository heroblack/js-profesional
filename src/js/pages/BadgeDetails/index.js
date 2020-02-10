import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import Badge from "../../components/Badge";
import DeleteBadgeModal from "../../components/DeleteBadgeModal";
import logo from "../../../image/platziconf-logo.svg";
import "./BadgeDetails.css";

function BadgeDetails(props) {
  console.log("los perros props:", props);

  return (
    <Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logo} alt="logo de la conferencia" />
            </div>
            <div className="BadgeDetails__hero-attendant-name col-6">
              <h1>
                {props.badge.firstName}
                <br />
                {props.badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={props.badge.firstName}
                lastName={props.badge.lastName}
                email={props.badge.email}
                twitter={props.badge.twitter}
                jobTitle={props.badge.jobTitle}
              />
            </div>
            <div className="col-6">
              <h2>Actions</h2>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${props.badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BadgeDetails;
