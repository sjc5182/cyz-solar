import React from "react";
import {
  Wrapper,
  HamburgerWrapper,
} from "../../Styled/ReusableComponents/NavBar";
import { withRouter } from "react-router-dom";
import DropDownMenu from "../ReusableComponents/MobileDropDown";
import Logo from "../../SVG/Icon/Logo.svg";

class NavBar extends React.Component {
  constructor() {
    super();
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      isMobile: false,
      open: false,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    if (window.innerWidth < 1024) {
      this.setState({
        isMobile: true,
      });
    } else {
      this.setState({
        isMobile: false,
      });
    }
  }

  handleLogo = (e) => {
    this.props.history.push("/");
  };

  handleSetOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <div>
        <Wrapper>
          <img src={Logo} alt="Logo" onClick={this.handleLogo} />
          {this.state.isMobile ? (
            <HamburgerWrapper onClick={this.handleSetOpen}>
              <span />
              <span />
              <span />
            </HamburgerWrapper>
          ) : (
            <DropDownMenu
              isMobile={this.state.isMobile}
              open={this.state.open}
            />
          )}
        </Wrapper>
        {this.state.isMobile && this.state.open ? (
          <DropDownMenu isMobile={this.state.isMobile} open={this.state.open} />
        ) : null}
      </div>
      /* <DropDownMenu open={open} setOpen={setOpen}>
          <img src={Hamburger} alt="Hamburger" onClick={() => setOpen(!open)} />
        </DropDownMenu> */
    );
  }
}

export default withRouter(NavBar);
