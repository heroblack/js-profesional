import React, { Component, Fragment } from "react";
import "./ricky.css";
import logo from "../../../image/ricky-logo.png";
import Loader from "../Loader";
function CharacterCard(props) {
  console.log("los props:", props);
  const { character } = props;
  return (
    <div
      className="CharacterCard"
      style={{
        backgroundImage: `url(${character.image})`
      }}
    >
      <div className="character-name">
        <span className="text-truncate">{character.name}</span>
        <span>like</span>
      </div>
    </div>
  );
}
class Ricky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      nextPage: 1,
      error: null,
      data: {
        results: []
      }
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  waitTime = async () => {
    let setId = await setTimeout(() => {
      console.log("timeout");
      this.setState({ loading: true });
    }, 5000);
  };

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      //let timeid = await this.waitTime();
      //console.log(timeid);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );

      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          //results: data.results
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
      console.log(data.results);
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };
  render() {
    if (this.state.error) {
      return `Error: ${this.state.error}`;
    }

    return (
      <Fragment>
        <div className="rick">
          <div className="rickyContainer">
            <div className="rickLayout">
              <img className="rickLogo" src={logo} alt="logo" />
              <ul className="rickListContainer">
                {this.state.data.results.map(character => (
                  <li key={character.id}>
                    <CharacterCard character={character} />
                  </li>
                ))}
              </ul>
              {this.state.loading && (
                <div className="loader">
                  <Loader />
                </div>
              )}

              {!this.state.loading && (
                <button
                  className="ricky-button"
                  onClick={() => this.fetchCharacters()}
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Ricky;
