import blog from "../blog.png";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  showPosts = () => {
    if (this.props.posts.length > 0) {
      return this.props.posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={blog} alt="blog" />
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      });
    } else {
      return <p>No posts to show</p>;
    }
  };

  render() {
    return (
      <>
        <h1>Home</h1>
        {this.showPosts()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(Home);
