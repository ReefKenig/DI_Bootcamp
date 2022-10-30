import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../redux/actions";

const Post = (props) => {
  const post_id = useParams().post_id;
  const post = props.posts.filter((post) => {
    return post.id == post_id;
  });

  const handleClick = (id) => {
    props.delete_post(id);
  };

  if (post.length === 0) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <h4>{post[0].title}</h4>
        <p>{post[0].body}</p>
        <Link to="/">
          <button onClick={() => handleClick(post.id)}>Delete Post</button>
        </Link>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = (dispatch) => {
  return { delete_post: (id) => dispatch(deletePost(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
