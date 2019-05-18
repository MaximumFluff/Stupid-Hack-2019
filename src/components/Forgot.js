import React, { Component } from "react";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Zoom = cssTransition({
  //enter: 'bounceIn',
  //exit: 'bounceOut',
  duration: [10000000, 10000000]
});

export default class Forgot extends Component {
  notify = () => {
    toast.warn("Try to remember your password :-)", {
      position: toast.POSITION.TOP_CENTER,
      //transition: Zoom,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
}
