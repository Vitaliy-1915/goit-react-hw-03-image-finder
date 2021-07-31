import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
// import { ToastContainer } from 'react-toastify';
import { WrapperContainer } from "./Wrapper.styles";

class Wrapper extends Component {
  state = {
    imageName: "",
    page: 1,
    images: [],
    // modalIsOpen: false,
    // selectedImage: null,
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ status: "pending", images: [] });

      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=21859800-af94843fb327cc57780ddd667&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`There is no images with name ${this.state.imageName}`)
          );
        })
        .then((data) => data.hits)
        .then((image) =>
          this.setState((prevState) => ({
            images: [...prevState.images, ...image],
            status: "resolved",
          }))
        )
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  formSubmit = (imageName) => {
    this.setState({ imageName });
  };

  onLoadMore = (e) => {
    this.setState((prevState) => ({ page: (prevState.page = 1) }));
  };

  render() {
    const { images, error, status } = this.state;

    if (status === "idle") {
      return (
        <WrapperContainer>
          <Searchbar onSubmit={this.formSubmit} />
          <ImageGallery images={images} />
          <h1>Start your search </h1>
        </WrapperContainer>
      );
    }

    if (status === "pending") {
      return (
        <WrapperContainer>
          <Searchbar onSubmit={this.formSubmit} />
          <ImageGallery images={images} />
          <h1>ЗАГРУЗКА</h1>
        </WrapperContainer>
      );
    }

    if (status === "rejected") {
      return (
        <WrapperContainer>
          <Searchbar onSubmit={this.formSubmit} />
          <ImageGallery images={images} />
          <h1>{error.message}</h1>
        </WrapperContainer>
      );
    }

    if (status === "resolved") {
      return (
        <WrapperContainer>
          <Searchbar onSubmit={this.formSubmit} />
          <ImageGallery images={images} />
          <Button onClick={this.onLoadMore} />
          {/* <ToastContainer
                position="top-center"
                autoClose={1000}
                closeOnClick={false}
              /> */}
        </WrapperContainer>
      );
    }
  }
}

export default Wrapper;
