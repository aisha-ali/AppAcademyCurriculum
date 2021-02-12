import { connect } from "react-redux";
import React from "react";
import PostForm from "./post_form";
import { fetchPost, updatePost } from "../actions/post_actions";
import { selectPost } from "../selectors";