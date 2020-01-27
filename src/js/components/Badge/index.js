import React from "react";
import confLogo from "../../../image/badge-header.svg";
import "./style.css";
class Badge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge__participante">
          <img className="Badge__avatar" src={this.props.avatar} alt="Avatar" />
          <h1 className="Badge__section-name">
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h5>{this.props.jobTitle}</h5>
          <p>@{this.props.twitter}</p>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
