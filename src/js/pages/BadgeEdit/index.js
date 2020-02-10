import React, { Component } from "react";

import Hero from "../../components/Hero";
import Badge from "../../components/Badge";
import BadgeForm from "../../components/BadgeForm";
import api from "../../../log.js";
import Loader from "../../components/Loader";

class BadgeEdit extends Component {
  state = {
    loading: true,
    error: null,
    form: { firstName: "", lastName: "", email: "", jobTitle: "", twitter: "" }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async event => {
    this.setState({ loading: true, error: null });
    try {
      console.log(this.props.match.params);
      const data = await api.badges.read(this.props.match.params.badgeId);
      console.log("la data:", data);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <Loader />
        </div>
      );
    }

    return (
      <div>
        <Hero />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "Fabio"}
                lastName={this.state.form.lastName || "Rojas"}
                email={this.state.form.email || "fabiorojas7@gmail.com"}
                twitter={this.state.form.twitter || "hackchan77"}
                jobTitle={
                  this.state.form.jobTitle || "Developer full stack JavaScript"
                }
                avatar={`https://s.gravatar.com/avatar/${this.state.form.email}?s=80`}
              />
            </div>
            <div className="col-6">
              <h1>Edit Badge</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeEdit;
