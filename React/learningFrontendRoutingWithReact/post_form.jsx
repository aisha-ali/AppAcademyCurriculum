import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    // set up initial state
    this.state = this.props.post; // a Post object has a title and a body
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // if we get a different post in props, we'll need to set state
    if (props.post.id !== state.id) {
      return props.post;
    }
  }