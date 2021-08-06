import React, { Component } from "react";
//  import { toast } from 'react-toastify';
import { Header, Form, Button, Span, Input } from "./Searchbar.styles";

class Searchbar extends Component {
  state = {
    imageName: "",
    error: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.imageName.trim() === "") {
      alert("Enter images and photos");
      // toast.error("введи имя");
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: "" });
  };

  handleFormChange = (event) => {
    this.setState({
      imageName: event.currentTarget.value.toLowerCase(),
    });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Span>Search</Span>
          </Button>

          <Input
            id={this.state.id}
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleFormChange}
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
