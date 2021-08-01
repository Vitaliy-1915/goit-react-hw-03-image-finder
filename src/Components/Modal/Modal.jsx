import React, { Component } from "react";
import { Overlay, OverlayModal } from "./Modal.styles";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    this.props.onClose();
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget !== event.target) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { image } = this.props;

    return (
      <Overlay onClick={this.handleBackdropClick}>
        <OverlayModal>
          <img src={image.src} alt={image.alt} />
        </OverlayModal>
      </Overlay>
    );
  }
}

export default Modal;
