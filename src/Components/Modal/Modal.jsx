import React, { Component } from "react";
import { Overlay, OverlayModal } from "./Modal.styles";

class Modal extends Component {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyPress);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyPress);
  // }

  // handleKeyPress = e => {
  //   if (e.code !== 'Escape') {
  //     return;
  //   }
  //   this.props.onClose();
  // };

  // handleBackdropClick = e => {
  //   if (this.backdropRef.current && e.target !== this.backdropRef.current) {
  //     return;
  //   }

  //   this.props.onClose();
  // };

  render() {
    const { image } = this.props;
    console.log(image);
    return (
      <Overlay
      // ref={this.backdropRef}
      // onClick={this.props.onClose}
      >
        <OverlayModal>
          <img src={image.src} alt={image.alt} />
        </OverlayModal>
      </Overlay>
    );
  }
}

export default Modal;
