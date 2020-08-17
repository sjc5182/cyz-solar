import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Section } from "./Styled/Section";
import NavBar from "./Components/ReusableComponents/NavBar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import "./App.css";

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: ${(props) => (props.zeroMar ? "0px" : "0px")}
//   }
// `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDropDown: true };
  }

  handleDropDownToggle = () => {
    this.setState((state) => ({
      isDropDown: !state.isDropDown,
    }));
  };

  render() {
    console.log(this.state.isDropDown);
    return (
      <Router>
        <Section>
          <NavBar DropDownMenu={this.handleDropDownToggle} />
          <Switch>
            <Route path="/Product">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Section>
      </Router>
    );
  }
}
export default App;
