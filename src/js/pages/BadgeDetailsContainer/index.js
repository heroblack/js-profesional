import React, { Fragment, Component } from "react";

import api from "../../../log";
import Loader from "../../components/Loader";
import PageError from "../../components/PageError";
import BadgeDetails from "../BadgeDetails";

class BadgeDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async event => {
    this.setState({ loading: true, error: null });
    try {
      this.badgeId = this.props.match.params.badgeId;
      const data = await api.badges.read(this.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = event => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = event => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async event => {
    this.setState({ loading: true, error: null });
    try {
      this.badgeId = this.props.match.params.badgeId;
      await api.badges.remove(this.badgeId);
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

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
