import React, { Component } from "react";
import { Header, Form, Button, Span, Input } from "./Searchbar.styles";

class Searchbar extends Component {
  render() {
    return (
      <Header>
        <Form>
          <Button type="submit">
            <Span>Search</Span>
          </Button>

          <Input
            type="text"
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
