import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "This is it.",
      value: "",
      hasLoaded: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    event.preventDefault();
  }

  handleClick() {
    this.setState(state => ({
      hasLoaded: !state.hasLoaded
    }));
  }

  componentDidMount() {
    this.setState(state => ({
      hasLoaded: !state.hasLoaded
    }));
  }

  render() {
    if (this.state.hasLoaded === true) {
      return (
        <React.Fragment>
          <h1>
            {this.props.sentence} {this.state.text}
          </h1>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={() => this.handleClick()}>Enter</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h2>Loading...</h2>
          <button onClick={() => this.handleClick()}>Enter</button>
        </React.Fragment>
      );
    }
  }
}

export default App;
