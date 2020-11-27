import React from "react";
import PropTypes from "prop-types";
import styles from "./burger.module.css";

export class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!this.state.active) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
    this.props.onClick(this.state.active);
  }
  render() {
    let temp = `${styles.burger}`;
    if (this.state.active) {
      temp += ` ${styles.clicked}`;
    }
    return (
      <a className={styles.menu} onClick={this.handleClick} href="#">
        <svg
          className={styles.svg}
          version="1.1"
          x="0px"
          y="0px"
          width="20px"
          height="20px"
          viewBox="0 0.5 30 29"
          enableBackground="new 0 0.5 30 29"
          xmlSpace="preserve"
        >
          <path
            className={temp}
            fill="none"
            stroke="#BADBAD"
            strokeWidth="5"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="10"
            d="M0,6.117h30.5c2.484,0,4.5,2.015,4.5,4.5c0,2.484-2.016,4.5-4.5,4.5h-30c-2.485,0-4.5,2.016-4.5,4.5s2.015,4.5,4.5,4.5H30h9.5
        l-25.833-9.469L39.5,5.883"
          />
        </svg>
      </a>
    );
  }
}
