import React, { Component } from "react";
import { Nav } from "./nav";
import { connect } from "react-redux";
import custom from "../styles/custom.css"; // eslint-disable-line no-unused-vars
import demoStyle from "../styles/demo3.css"; // eslint-disable-line no-unused-vars

class Demo3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName={"custom.container"}>
        <Nav {...this.props} />
        <section styleName={"custom.header"}>
          <h2>Slider Demo</h2>
          <div>
            <input class="slider" type="range" min="0" max="25" />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(Demo3);
