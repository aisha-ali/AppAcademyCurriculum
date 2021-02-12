import PostForm from "./post_form";
import { connect } from "react-redux";
import { createPost } from "../actions/post_actions";

const mapStateToProps = state => {
  return {
    post: { title: "", body: "" } // a default blank object
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);