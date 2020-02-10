import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero";
import BadgesList from "../../components/BadgesList";
import "./Badges.css";
import api from "../../../log.js";
import Loader from "../../components/Loader";
import PageError from "../../components/PageError";
import MiniLoader from "../../components/MiniLoader";
class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
    console.log("1).Construcntor");
  }

  componentDidMount() {
    this.fetchData();

    //this.idInterval = setInterval(this.fetchData, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      console.log("la data:", data);
      this.setState({ loading: false, data: data });
    } catch (error) {
      console.log("el error es:", error);
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, preState) {
    console.log("5.ComponentDidUpdate()");
    console.log({ prevProps, preState });

    console.log({
      props: this.props,
      state: this.state
    });
  }

  componentWillUnmount() {
    console.log("6).Desmontaje");
    clearTimeout(this.timeoutId);
  }
  render() {
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    if (this.state.loading === true && !this.state.data) {
      return (
        <div className="loader">
          <Loader />
        </div>
      );
    }

    console.log("2 /4).Render");
    // const styles = {
    //   color: this.props.color,
    //   fontSize: this.props.size
    // };
    return (
      <Fragment>
        <Hero />
        <div className="Badges">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges">
            <BadgesList badges={this.state.data} />
            {this.state.loading && <MiniLoader />}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Badges;
