import React, { Component, Fragment } from "react";

class BadgeForm extends Component {
  constructor(props) {
    super(props);
    // this.props.formValues = { firstName: "fabio" };
  }

  // handleChange = e => {
  //   console.log({
  //     name: e.target.name,
  //     value: e.target.value
  //   });

  //   this.props.formValues({
  //     [e.target.name]: e.target.value
  //   });
  // };

  handleClick = e => {
    console.log("Button was clicked");
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  // };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Guardar
          </button>

          {this.props.error && (
            <p className="text-danger ">{this.props.error.message}</p>
          )}
        </form>
      </Fragment>
    );
  }
}

export default BadgeForm;
