import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGalleryList from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import { WrapperContainer } from "./Wrapper.styles";

class Wrapper extends Component {
  state = {
    imageName: "",
    // page: 1,
    // images: [],
    // modalIsOpen: false,
    // selectedImage: null,
    // status: 'idle',
    // error: null,
  };

  formSubmit = (imageName) => {
    console.log(imageName);
    this.setState({ imageName });

    // const { images } = this.state;
    // const image = {
    //   id: e.id,
    //   name: e.name,
    //   number: e.number,
    // };
    // this.setState((prevState) => ({
    //   images: [...prevState.images, images],
    // }));
  };

  render() {
    return (
      <WrapperContainer>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGalleryList />
        <Button />
      </WrapperContainer>
    );
  }
}

export default Wrapper;
