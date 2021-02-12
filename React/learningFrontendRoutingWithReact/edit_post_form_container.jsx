import { connect } from "react-redux";
import React from "react";
import PostForm from "./post_form";
import { fetchPost, updatePost } from "../actions/post_actions";
import { selectPost } from "../selectors";

const mapStateToProps = (state, ownProps) => {
  const defaultPost = { title: "", body: "" };
  const post = selectPost(ownProps.match.params.postId) || defaultPost;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    submit: post => dispatch(updatePost(post))
  };
};