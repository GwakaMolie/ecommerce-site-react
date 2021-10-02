import React from "react";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import { Route, Link } from "react-router-dom";

const HatsPage = () => {
  return <Link to="/">Back</Link>;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </div>
    );
  }
}

export default App;
