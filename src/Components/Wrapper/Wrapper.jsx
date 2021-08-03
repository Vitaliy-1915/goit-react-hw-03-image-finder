import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
// import FetchApi from '../FetchApi/FetchImages';
// import { ToastContainer } from 'react-toastify';
import { WrapperContainer } from "./Wrapper.styles";

class Wrapper extends Component {
  state = {
    imageName: "",
    page: 1,
    images: [],
    modalIsOpen: false,
    selectedImage: null,
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName, page, images } = this.state;

    //   if (prevState.imageName !== this.state.imageName) {
    //     this.setState({ status: "pending", page: 1, images: [] });

    //   FetchApi.FetchImages(imageName, page)
    //     .then((data) => data.hits)
    //     .then((image) =>
    //       this.setState((prevState) => ({
    //         images: [...prevState.images, ...image],
    //         status: "resolved",
    //       }))
    //     )
    //     .catch((error) => this.setState({ error, status: "rejected" }))
    //   };

    //   if (prevState.page !== this.state.page) {

    //   FetchApi.FetchImages(imageName, page)
    //     .then((data) => data.hits)
    //     .then((image) =>
    //       this.setState((prevState) => ({
    //         images: [...prevState.images, ...image],
    //         status: "resolved",
    //       }))
    //     )
    //     .catch((error) => this.setState({ error, status: "rejected" }))
    // };

    if (prevState.imageName !== imageName || prevState.page !== page) {
      this.setState({ status: "pending" });

      fetch(
        `https://pixabay.com/api/?q=${imageName}&page=${page}&key=21859800-af94843fb327cc57780ddd667&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`There is no images with name ${imageName}`)
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

    if (prevState.images !== images) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }

    if (prevState.imageName !== imageName) {
      this.resetState();
    }
  }

  resetState = () => {
    this.setState({
      // imageName: "",
      page: 1,
      images: [],
      // modalIsOpen: false,
      // selectedImage: null,
      status: "idle",
    });
  };

  formSubmit = (imageName) => {
    this.setState({ imageName });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  openModal = (src, alt) => {
    this.setState({
      modalIsOpen: true,
      selectedImage: { src, alt },
    });
  };

  closeModal = () => this.setState({ modalIsOpen: false });

  render() {
    const { images, error, status, selectedImage, modalIsOpen } = this.state;

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
          {images.length > 0 && <Button onClick={this.onLoadMore} />}
          <Loader
            type="Watch"
            color="#00BFFF"
            height={300}
            width={300}
            timeout={3000}
          />
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
          <ImageGallery images={images} openModal={this.openModal} />
          {images.length > 0 && <Button onClick={this.onLoadMore} />}
          {images.length < 1 && <h2>invalid name!!!</h2>}
          {modalIsOpen && (
            <Modal image={selectedImage} onClose={this.closeModal} />
          )}
          {/* <ToastContainer
                position="top-center"
                autoClose={100}
                closeOnClick={false}
              /> */}
        </WrapperContainer>
      );
    }
  }
}

export default Wrapper;
