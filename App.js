import React from "react";

// function App(props){
//     return (
//     <h1>{props.sentence}</h1>
//     );

// }
// export default App

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "This is it.",
      value: "",
      hasLoaded: false
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  hasLoaded() {
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
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <h1>
            {this.props.sentence} {this.state.text}
          </h1>
          <h2>{this.state.value}</h2>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={() => this.hasLoaded()}>Enter</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h2>Loading...</h2>
          <button onClick={() => this.hasLoaded()}>Enter</button>
        </React.Fragment>
      );
    }
  }
}

export default App;
