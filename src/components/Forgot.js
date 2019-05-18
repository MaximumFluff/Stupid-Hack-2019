import React, { Component } from "react";
import { ToastContainer, toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Forgot extends Component {
  notify = () => {
    toast.warn("Try to remember your password :-)", {
      position: toast.POSITION.TOP_CENTER,
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
